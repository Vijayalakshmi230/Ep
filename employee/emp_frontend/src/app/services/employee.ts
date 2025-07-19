import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employeemodel } from '../model/employeemodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Employee {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  addemp(data: Employeemodel): Observable<Employeemodel>
  {
    return this.http.post<Employeemodel>(`${this.apiUrl}/post`, data);
  }

  getAllemp(): Observable<Employeemodel[]>{
    return this.http.get<Employeemodel[]>(`${this.apiUrl}/get`);
  }
  
}
