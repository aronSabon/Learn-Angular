import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { exhaust, exhaustMap, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export class AuthInterceptorService implements HttpInterceptor {
    authService:AuthService=inject(AuthService);

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return this.authService.user.pipe(take(1),exhaustMap(user =>{
            if(!user){
                return next.handle(req);
            }
            const modifyReq = req.clone({
                params: new HttpParams().set('auth',user.token)
            });
            return next.handle(modifyReq);
        }))
       




        // const modifyReq= req.clone();
        // // {headers: req.headers.append('auth','lemonauth')}
        // console.log('auth Interceptor called')
        // return next.handle(modifyReq).pipe(tap((event) => {
        //     if(event.type===HttpEventType.Response ){
        //         console.log('response event:');
        //         console.log(event);
        //         console.log("response arrived. Response:");
        //         console.log(event.body);
        //     }
        // }))
    }
}