import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display:boolean=false;
  title = 'Angular-Custom-Structural-Directive';

  showTerms(){
    this.display=true;
  }
}
