import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InstructorModel } from '../model/instructor-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Instructor {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  addInstructor(data: InstructorModel): Observable<InstructorModel>{
    return this.http.post<InstructorModel>(`${this.apiUrl}/post`, data);
  }

  getAllInstructor(): Observable<InstructorModel[]>{
    return this.http.get<InstructorModel[]>(`${this.apiUrl}/getAll`);
  }
  
}
