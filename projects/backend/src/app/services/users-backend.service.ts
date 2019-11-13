import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersB } from '../User/users-backend/usersB';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersBackendService {

  apiUrl = 'http://localhost:80/api/users';
  constructor(private http: HttpClient) { }

  getUsers (): Observable<UsersB[]> {
    return this.http.get<UsersB[]>(this.apiUrl);
  }

  getUser(id: number): Observable<UsersB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UsersB>(url);
  }

  updateUser(usersB: UsersB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, usersB, httpOptions);
  }

  deleteUser( user: UsersB | number): Observable<UsersB> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<UsersB>(url, httpOptions);
  }

  register(user: UsersB) {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user);
}

  
}
