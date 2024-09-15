import { NgModule } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./Services/auth.interceptor.service";
import { LoggingInterceptorService } from "./Services/logging-interceptor-service";
import { provideClientHydration } from "@angular/platform-browser";

@NgModule({
    providers:[
         
    AuthService,
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
    { provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptorService,multi:true},
    provideClientHydration()
    ]
})
export class CoreModule{

}