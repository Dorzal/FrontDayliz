import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Observable, of } from 'rxjs';
import { SubcategoriesB } from '../SubCategory/sub-categories-backend/subcategoriesB';
import { ProductsB } from '../Product/products-backend/productsB';
import {formatDate} from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesBackendService {
  
  apiUrl = `${environment.rootUrl}/api/sub_categories`
  constructor(private http: HttpClient) { }

  getSubCategories(): Observable<SubcategoriesB[]> {
    return this.http.get<SubcategoriesB[]>(this.apiUrl);
  }

  getSubCategory(id: number): Observable<SubcategoriesB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<SubcategoriesB>(url);
  }
  
  getSubCategoryProducts(id: number) : Observable<ProductsB> {
    var day = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    const url = `${this.apiUrl}/${id}/products?showAt=${day}`;
    console.log(url);
    return this.http.get<ProductsB>(url);
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

  getRelation(id : number): Observable<ProductsB[]> {
    const url = `${this.apiUrl}/${id}/products`;
    return this.http.get<ProductsB[]>(url);
  }
}