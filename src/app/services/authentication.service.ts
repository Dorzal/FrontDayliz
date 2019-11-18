import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UsersB } from '../../../projects/backend/src/app/User/users-backend/usersB';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    apiUrl = environment.rootUrl;
    private currentUserSubject: BehaviorSubject<UsersB>;
    public currentUser: Observable<UsersB>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UsersB>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UsersB {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/api/login_check`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        
    }
}