import { Component, OnInit } from '@angular/core';
import { Biketaxi } from '../services/biketaxi';
import { BiketaxiModel } from '../models/biketaxi';

@Component({
  selector: 'app-display-bikes',
  standalone: false,
  templateUrl: './display-bikes.html',
  styleUrl: './display-bikes.css'
})
export class DisplayBikes implements OnInit {
  bikeApplications: BiketaxiModel[] = [];

  constructor(private bikeService: Biketaxi) {}

  ngOnInit(): void {
    this.bikeService.getAllBiketaxi().subscribe({
      next: (data) => {
        this.bikeApplications = data;
      },
      error: (error) => {
        console.error('Failed to fetch data', error);
      }
    });
  }
}