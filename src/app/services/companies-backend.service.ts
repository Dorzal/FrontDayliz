import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { CompaniesB } from '../companies-backend/companiesB';

@Injectable({
  providedIn: 'root'
})
export class CompaniesBackendService {

  apiUrl = 'http://51.15.233.25/api/companies/'
  constructor(private http: HttpClient) { }

  listCompanies() {
    return this.http.get<CompaniesB[]>(this.apiUrl);
  }

  getCompanyById(id: string): Observable<CompaniesB[]> {
    id = id.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = id ?
     { params: new HttpParams().set('id', id) } : {};
    return this.http.get<CompaniesB[]>(this.apiUrl, options);
  }


}
