import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;

  authService:AuthService=inject(AuthService);
  router:Router=inject(Router);
  activeRoute:ActivatedRoute=inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((query)=>{
      const logout=Boolean(query.get('logout'));
      if(logout){
        this.authService.Logout();
        alert('You are logged out now.... Is Logged='+ this.authService.isLogged);
        console.log('logged:'+this.authService.isLogged);
        console.log('auth:'+this.authService.IsAuthenticated());


      }
    })
  }
  OnSubmit(){


   let user:User= this.authService.Login(this.username.nativeElement.value,this.password.nativeElement.value);
   if(user===undefined){
    alert('user doesnot exist');
   }
   else{
    alert('user '+user.name+' is logged Successfully');
    this.router.navigate(['Courses']);


   }
   console.log(this.authService.isLogged);
  }

}
