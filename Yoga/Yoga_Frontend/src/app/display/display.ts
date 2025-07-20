import { Component, OnInit } from '@angular/core';
import { InstructorModel } from '../model/instructor-model';
import { Instructor } from '../service/instructor';

@Component({
  selector: 'app-display',
  standalone: false,
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display implements OnInit {

  instructors: InstructorModel[] = [];

  constructor(private service: Instructor) {}

  ngOnInit(): void {
    this.service.getAllInstructor().subscribe({
      next: (data) => {
        this.instructors = data;
      },
      error: (err) => {
        console.error('Error fetching instructors:', err);
      }
    });
  }
}