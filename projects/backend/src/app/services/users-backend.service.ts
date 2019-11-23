import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersB } from '../User/users-backend/usersB';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from '../../../../../src/environments/environment';
import { async } from 'q';
import { ProductsB } from '../Product/products-backend/productsB';
import { formatDate } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersBackendService {

  apiUrl = `${environment.rootUrl}/api/users`;
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
    return this.http.post(url, {"email" : decode['username']}).toPromise();
  }

  knowRole() {
    const token = this.auth.currentUserValue['token'];
    const helper = new JwtHelperService();
    const decode = helper.decodeToken(token);
    return decode["roles"]
  }


  patchInterest(interest: Array<string>) {
    var u = JSON.stringify({interest : interest});
    console.log(u);
    this.know().then(data => {
      const url = `${this.apiUrl}/${data['id']}`;
      console.log(url);
      this.http.patch(url, u, httpOptions).subscribe();
    })
  }

  async checkInterest() {
    
    let user = await this.know();
    const url = `${this.apiUrl}/${user['id']}/interests`;
    return await this.http.get(url);

  }

  async getInterests() {
    let user =  await this.know();
    const url = `${this.apiUrl}/${user['id']}/interests`;
    return this.http.get<UsersB[]>(url);
  }

  async getUserSubCategoryProducts() {
    let idUser =  await this.know();
    const url = `${this.apiUrl}/${idUser['id']}/bouquet`;
    return this.http.get<object>(url);
  }


  async getProfil(){
    let idUser =  await this.know();
    const url = `${this.apiUrl}/${idUser['id']}`;
    return this.http.get<UsersB>(url);
  }


}
