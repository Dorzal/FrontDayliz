import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CompaniesB } from '../companies-backend/companiesB';

@Injectable({
  providedIn: 'root'
})
export class CompaniesBackendService {
  
  apiUrl = 'http://51.15.233.25/api/companies/'
  constructor(private http: HttpClient) { }

  listCompanies(): Observable<CompaniesB[]> {
    return this.http.get<CompaniesB[]>(this.apiUrl);
  }

  getCompanyById(id: string): Observable<CompaniesB[]> {
    this.apiUrl = this.apiUrl + id;
    return this.http.get<CompaniesB[]>(this.apiUrl);
  }


}
