import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  counter=signal(0);
  message:string[]=[];
  increment(){
    this.counter
  }
  decrement(){
    this.counter
  }

}
