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
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { FormsModule } from '@angular/forms';
import { RouteModule } from './route.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouteModule

  ],
  providers: [
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
    { provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptorService,multi:true},
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
