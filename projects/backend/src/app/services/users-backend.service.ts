import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersB } from '../User/users-backend/usersB';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthenticationService } from 'src/app/services/authentication.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersBackendService {

  apiUrl = 'http://localhost:80/api/users';
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

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

  know() {
    const token = this.auth.currentUserValue['token'];
    const helper = new JwtHelperService();
    const decode = helper.decodeToken(token);
    const url = `${this.apiUrl}/search`;
    return this.http.post(url, {"email" : decode['username']});
  }
  
}
