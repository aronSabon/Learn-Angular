import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-LifeCycle-Hook';
  inputBalVal:string='';
onDestroy:boolean=false;



  constructor(){
    console.log('app constructor is called')
  }

  // @ViewChild('inputtext') inputText:ElementRef;
  ngAfterViewInit(){
    // console.log('ngafterviewinit from app')
  }
  ngAfterViewChecked(){
    // console.log('ngAfterViewChecked from app')

  }


  assignText(input:HTMLInputElement){
  this.inputBalVal=input.value;


  // console.log(input.value);

  // console.log(this.inputText.n.ativeElement.value)
  }

  
  destroy(){
    this.onDestroy=!this.onDestroy;
  }
}
