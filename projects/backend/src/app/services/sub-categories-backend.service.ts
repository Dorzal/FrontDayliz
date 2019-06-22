import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { SubcategoriesB } from '../SubCategory/sub-categories-backend/subcategoriesB';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesBackendService {
  
  apiUrl = 'http://localhost/api/sub_categories'
  constructor(private http: HttpClient) { }

  getSubCategories(): Observable<SubcategoriesB[]> {
    return this.http.get<SubcategoriesB[]>(this.apiUrl);
  }

  getSubCategory(id: number): Observable<SubcategoriesB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<SubcategoriesB>(url);
  }

  updateSubCategory(subcategoriesB: SubcategoriesB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, subcategoriesB, httpOptions);
  }

  deleteSubCategory( subcategoriesB: SubcategoriesB | number): Observable<SubcategoriesB> {
    const id = typeof subcategoriesB === 'number' ? subcategoriesB : subcategoriesB.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<SubcategoriesB>(url, httpOptions);
  }

  addSubCategory( subcategoriesB: SubcategoriesB): Observable<SubcategoriesB> {
    return this.http.post<SubcategoriesB>(this.apiUrl, subcategoriesB, httpOptions);
  }
}