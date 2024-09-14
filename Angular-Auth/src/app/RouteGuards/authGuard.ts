import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../Services/auth.service";
import { inject } from "@angular/core";
import { map, Observable } from "rxjs";

export const canActivate= (
    router: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
):boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> =>{
     const authService =inject(AuthService);
     const route = inject(Router);

    return authService.user.pipe(map((user) =>{
        // return user ? true : false;
        const loggedIn = user 
        if(loggedIn){
            return true;
        }
        else{
            return route.createUrlTree(['/login']);
        }
    }))
    }