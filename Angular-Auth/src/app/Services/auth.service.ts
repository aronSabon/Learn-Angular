import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../Models/AuthResponse";
import { catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    http: HttpClient = inject(HttpClient);

    signup(email, password) {
        const data = { email: email, password: password, returnSecureToken: true }
        return this.http.post<AuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_eEJpTYpTtjLzRX9b0eADeDcg3wLSKsM',
            data
        ).pipe(catchError((err) => {
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
                }
                return throwError(() => errorMessage);
             
            
        }))
    }
}