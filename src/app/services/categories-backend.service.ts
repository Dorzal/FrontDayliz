import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { CategoriesB } from '../categories-backend/categoriesB';

@Injectable({
  providedIn: 'root'
})
export class CategoriesBackendService {

  apiUrl = 'http://51.15.233.25/api/categories/'
  constructor(private http: HttpClient) { }

  listCategories() {
    return this.http.get<CategoriesB[]>(this.apiUrl);
  }
}