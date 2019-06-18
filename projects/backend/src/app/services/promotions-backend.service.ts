import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromotionsB } from '../promotions-backend/promotionsB';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PromotionsBackendService {

  apiUrl = 'http://51.15.233.25/api/promotions'
  constructor(private http: HttpClient) { }

  getPromotions(): Observable<PromotionsB[]> {
    return this.http.get<PromotionsB[]>(this.apiUrl);
  }

  getPromotion(id: number): Observable<PromotionsB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PromotionsB>(url);
  }

  updatePromotion(promotionsB: PromotionsB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, promotionsB, httpOptions);
  }

  deletePromotion( promotion: PromotionsB | number): Observable<PromotionsB> {
    const id = typeof promotion === 'number' ? promotion : promotion.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<PromotionsB>(url, httpOptions);
  }

  addPromotion( promotion: PromotionsB): Observable<PromotionsB> {
    return this.http.post<PromotionsB>(this.apiUrl, promotion, httpOptions);
  }
}
