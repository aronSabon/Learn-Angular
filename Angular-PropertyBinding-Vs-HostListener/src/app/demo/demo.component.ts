import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
inputText:string="hello property binding";
focusBinding(){
  console.log('from event binding')
}
}
