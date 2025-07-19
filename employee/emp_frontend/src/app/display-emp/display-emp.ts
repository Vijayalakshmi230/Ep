import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-emp',
  standalone: false,
  templateUrl: './display-emp.html',
  styleUrl: './display-emp.css'
})
export class DisplayEmp implements OnInit {
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.http.get<any[]>('http://localhost:8080/api/get').subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error('Error fetching employees:', err)
    });
  }
}
