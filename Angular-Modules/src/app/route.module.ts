import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";

const routes: Routes = [ 
    { path: '', component: HomeComponent }, 
    { path: 'dashboard' , loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashBoardModule)},
    { path: 'login' , loadChildren: () => import('./login/auth.module').then((mod) => mod.AuthModule)},
   
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: []
})
export class RouteModule { }