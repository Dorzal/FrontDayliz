import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsB } from '../Product/products-backend/productsB';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProductsBackendService {

  apiUrl = 'http://localhost/api/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsB[]> {
    return this.http.get<ProductsB[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<ProductsB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProductsB>(url);
  }

  updateProduct(productsB: ProductsB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, productsB, httpOptions);
  }

  deleteProduct( product: ProductsB | number): Observable<ProductsB> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<ProductsB>(url, httpOptions);
  }

  addProduct( product: ProductsB): Observable<ProductsB> {
    return this.http.post<ProductsB>(this.apiUrl, product, httpOptions);
  }
}
