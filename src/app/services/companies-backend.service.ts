import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { CompaniesB } from '../companies-backend/companiesB';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CompaniesBackendService {
  
  apiUrl = 'http://51.15.233.25/api/companies'
  constructor(private http: HttpClient) { }

  getCompanies (): Observable<CompaniesB[]> {
    return this.http.get<CompaniesB[]>(this.apiUrl);
  }

  getCompany(id: number): Observable<CompaniesB> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CompaniesB>(url);
  }

  updateCompany(companiesB: CompaniesB, id) : Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, companiesB, httpOptions);
  }

  deleteCompany( company: CompaniesB | number): Observable<CompaniesB> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<CompaniesB>(url, httpOptions);
  }

  


}
