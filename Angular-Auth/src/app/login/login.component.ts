import { HttpClient } from '@angular/common/http';
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

  OnSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  OnFormSubmitted(form: NgForm) {
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
        },
         error: (err) => {
          console.log(err);
        }
      })
    }
    form.reset();
  }

}
