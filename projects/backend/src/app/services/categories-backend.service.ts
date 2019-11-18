import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CategoriesB } from '../Category/categories-backend/categoriesB';
import { Observable } from 'rxjs';
import { SubcategoriesB } from '../SubCategory/sub-categories-backend/subcategoriesB';
import { environment } from '../../../../../src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesBackendService {

  apiUrl = `${environment.rootUrl}/api/categories`
  constructor(private http: HttpClient) { }

  getCategories (): Observable<CategoriesB[]> {
    return this.http.get<CategoriesB[]>(this.apiUrl);
  }

  getCategory(id: number): Observable<CategoriesB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CategoriesB>(url);
  }

  updateCategory(categoriesB: CategoriesB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, categoriesB, httpOptions);
  }

  deleteCategory( category: CategoriesB | number): Observable<CategoriesB> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<CategoriesB>(url, httpOptions);
  }

  addCategory( category: CategoriesB): Observable<CategoriesB> {
    return this.http.post<CategoriesB>(this.apiUrl, category, httpOptions);
  }

  getRelation( id: number): Observable<SubcategoriesB[]> {
    const url = `${this.apiUrl}/${id}/sub_categories`;
    return this.http.get<SubcategoriesB[]>(url);
  }
}
