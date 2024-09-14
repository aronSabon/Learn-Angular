import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Models/AuthResponse";
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from "rxjs";
import { User } from "../Models/User";
import { response } from "express";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    http: HttpClient = inject(HttpClient);
    user = new BehaviorSubject<User>(null);

    signup(email, password) {
        const data = { email: email, password: password, returnSecureToken: true }
        return this.http.post<AuthResponse>
        (
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_eEJpTYpTtjLzRX9b0eADeDcg3wLSKsM',
            data
        ).pipe(catchError(this.handleError),tap((res) => {
           this.handleUser(res);
        }))
    }

    login(email, password) {
        const data = { email: email, password: password, returnSecureToken: true }
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_eEJpTYpTtjLzRX9b0eADeDcg3wLSKsM',
            data
        ).pipe(catchError(this.handleError),tap((res) => {
            this.handleUser(res);
        }));
    }

    private handleUser(res){
        const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
        const expiresIn = new Date(expiresInTs);
        const user = new User(res.email,res.localId,res.idToken,expiresIn);
        this.user.next(user);
    }

    private handleError(err) {
        console.log(err);
        let errorMessage: string = "An unknown error occured";
        if (!err.error || !err.error.error) {
            return throwError(() => errorMessage);
        }
        switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "Email is already registered";
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = "This operation is not allowed"
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = "Email or password is incorrect"
                break;
        }
        return throwError(() => errorMessage);
    }
}