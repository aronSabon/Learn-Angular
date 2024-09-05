import { Component, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  router:Router=inject(Router);
  title = 'Angular-Routing';

  showLoader:Boolean=false;
ngOnInit(): void {
  this.router.events.subscribe((event)=>{
    if(event instanceof NavigationStart){
      this.showLoader=true;
    }
    if(event instanceof NavigationEnd||event instanceof NavigationCancel||event instanceof NavigationError){
      this.showLoader=false;
    }
  })
}
}
