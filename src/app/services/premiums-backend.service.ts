import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { PremiumsB } from '../premiums-backend/premiumsB';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PremiumsBackendService {
  
  apiUrl = 'http://51.15.233.25/api/premia'
  constructor(private http: HttpClient) { }

  getPremiums(): Observable<PremiumsB[]> {
    return this.http.get<PremiumsB[]>(this.apiUrl);
  }

  getPremium(id: number): Observable<PremiumsB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PremiumsB>(url);
  }

  updatePremium(premiumsB: PremiumsB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, premiumsB, httpOptions);
  }

  deletePremium( premium: PremiumsB | number): Observable<PremiumsB> {
    const id = typeof premium === 'number' ? premium : premium.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<PremiumsB>(url, httpOptions);
  }

  addPremium( premium: PremiumsB): Observable<PremiumsB> {
    return this.http.post<PremiumsB>(this.apiUrl, premium, httpOptions);
  }
}