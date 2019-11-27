import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../src/environments/environment';
import { CommentsB } from '../Product/products-backend/commentsB';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CommentBackendService {
    apiUrl =  `${environment.rootUrl}`
    constructor(private http: HttpClient) { }


    getComments(id: number): Observable<CommentsB[]> {
        const url = `${this.apiUrl}/api/products/${id}/commentaries`;
        return this.http.get<CommentsB[]>(url);
    }

    addComment( comment: object) {
      const url = `${this.apiUrl}/api/commentaries`;
      return this.http.post(url, comment, httpOptions);
    }
}
