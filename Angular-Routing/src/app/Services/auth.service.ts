import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    userService:UserService=inject(UserService);
    isLogged:Boolean=false;

    Login(username:string,password:string){
        let user =this.userService.users.find((user)=> 
                                     user.username===username
                                     && user.password===password);

        if(user === undefined){
            this.isLogged=false;
        }
        else{ this.isLogged=true;}
        return user;
    }
    Logout(){
        this.isLogged=false;
    }
    IsAuthenticated(){
        return this.isLogged;
    }



}