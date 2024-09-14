import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { userInfo } from 'os';
import { User } from '../Models/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  authService:AuthService=inject(AuthService);
  isLoggedIn:boolean=false;
  private userSubject:Subscription;

  
  ngOnInit(){
    this.userSubject =this.authService.user.subscribe((user: User)=> {
      this.isLoggedIn= user? true : false; 
      console.log(user);
    });
  }
  ngOnDestroy(){
    this.userSubject.unsubscribe();
  }
  OnLogout(){
    this.authService.logout();
  }
}
