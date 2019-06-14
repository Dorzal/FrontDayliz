import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompaniesB } from './companiesB';

@Injectable({
  providedIn: 'root'
})
export class CompaniesBackendService {
  apiUrl = 'http://51.15.233.25/api/companies'
  constructor(private http: HttpClient) { }

  listCategories() {
    return this.http.get<CompaniesB[]>(this.apiUrl);
  }
}
