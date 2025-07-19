import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BiketaxiModel } from '../models/biketaxi';

@Injectable({
  providedIn: 'root'
})
export class Biketaxi  {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  addBiketaxi(data: BiketaxiModel): Observable<BiketaxiModel> {
    return this.http.post<BiketaxiModel>(`${this.apiUrl}/addBiketaxi`, data);
  }

  getAllBiketaxi(): Observable<BiketaxiModel[]> {
    return this.http.get<BiketaxiModel[]>(`${this.apiUrl}/getAllBiketaxi`);
  }
}