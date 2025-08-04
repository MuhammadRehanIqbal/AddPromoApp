import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Tasks } from '../models/tasks.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'https://your-api.com/api/tasks';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl);
  }

  getById(id: number): Observable<Tasks> {
    return this.http.get<Tasks>(`${this.apiUrl}/${id}`);
  }

  create(task: Tasks): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  update(id: number, task: Tasks): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}