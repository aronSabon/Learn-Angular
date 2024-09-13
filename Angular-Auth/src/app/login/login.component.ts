import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginMode: boolean = true;
  authService: AuthService = inject(AuthService);
  isLoading:boolean=false;
  errorMessage:string | null = null;

  OnSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  OnFormSubmitted(form: NgForm) {
    this.isLoading=true;

    const email = form.value.email;
    const password = form.value.password;
    // console.log(form);
    // console.log(form.value);
    if (this.isLoginMode) {
      return;
    }
    else {
      this.authService.signup(email, password).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading=false;
        },
         error: (errMsg) => {
          console.log(errMsg);
          // this.SetErrorMessage(err);
          this.errorMessage=errMsg;
          this.isLoading=false;
       this.hideSnackbar();
        }
      })
    }

    form.reset();
  }
  hideSnackbar(){
    setTimeout(() => {
      this.errorMessage=null;
  }, 3000);
  }
  // SetErrorMessage(err:HttpErrorResponse){
  //   if(err.error.error="EMAIL_EXISTS"){
  //     this.errorMessage="Email already registered.."
  //   }
  //   else{
  //     this.errorMessage=err.error.error.message;
  //   }
  //   setTimeout(() => {
  //     this.errorMessage=null;
  //   }, 3000);
  // }

}
