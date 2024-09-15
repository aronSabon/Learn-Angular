import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { canActivate } from "./RouteGuards/authGuard";
import { OverviewComponent } from "./dashboard/overview/overview.component";
import { StatsComponent } from "./dashboard/stats/stats.component";

const routes: Routes = [ 
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', canActivate:[canActivate], children:[
      {path: 'overview', component: OverviewComponent},
      {path: 'stats', component: StatsComponent}
    ] },  
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
  providers: []
})
export class RouteModule { }