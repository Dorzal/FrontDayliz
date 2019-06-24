import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Categories } from '../navbar/categories';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  apiUrl = 'http://localhost/api/categories'
  constructor(private http: HttpClient) { }

  getCategories (): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiUrl);
  }
}
