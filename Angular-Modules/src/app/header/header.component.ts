import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { userInfo } from 'os';
import { User } from '../Models/User';
import { Subscription, take } from 'rxjs';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  authService:AuthService=inject(AuthService);
  isLoggedIn:boolean=false;
  
  private userSubject:Subscription;
countService:CounterService=inject(CounterService);
  
  ngOnInit(){
    this.countService.increment('headerComponent');

    this.userSubject =this.authService.user.subscribe((user: User)=> {
      this.isLoggedIn= user? true : false; 
      console.log(this.isLoggedIn);
    });
  }
  ngOnDestroy(){
    this.userSubject.unsubscribe();
  }
  OnLogout(){
    this.authService.logout();
  }
}
