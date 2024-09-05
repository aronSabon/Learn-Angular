import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Dynamic-Components';
  case:string='';
  homeClicked(){
    this.case="default";
  }
  usersClicked(){
    this.case="users";
  }
}
