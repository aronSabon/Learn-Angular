import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, withFetch } from '@angular/common/http';
import { AuthInterceptorService } from './Services/auth.interceptor.service';
import { LoggingInterceptorService } from './Services/logging-interceptor-service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouteModule } from './route.module';
import { SnackbarComponent } from './utils/snackbar/snackbar.component';
import { DashBoardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared.module';
import { AuthService } from './Services/auth.service';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouteModule,
    DashBoardModule,
    CoreModule

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
