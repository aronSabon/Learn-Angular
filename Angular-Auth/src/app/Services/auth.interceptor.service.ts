import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifyReq= req.clone();
        // {headers: req.headers.append('auth','lemonauth')}
        console.log('auth Interceptor called')
        return next.handle(modifyReq).pipe(tap((event) => {
            if(event.type===HttpEventType.Response ){
                console.log('response event:');
                console.log(event);
                console.log("response arrived. Response:");
                console.log(event.body);
            }
        }))
    }
}