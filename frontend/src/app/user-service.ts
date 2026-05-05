import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/api/users")
  }

}
