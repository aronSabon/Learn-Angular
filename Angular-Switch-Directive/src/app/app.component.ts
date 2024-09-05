import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Switch-Directive';
  case:string='';
  infoClick(){
    this.case="default";
  }
  termsClick(){
    this.case="terms";
  }
  policyClick(){
    this.case="policy";
  }
  aggrementClick(){
    this.case="aggrement";
  }
}
