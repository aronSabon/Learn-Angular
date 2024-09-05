import { QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-View-Children';
  fullName:string='';

  @ViewChildren ('inputEl') inputElements:QueryList<ElementRef>;


  show(){
    let name='';
    this.inputElements.forEach((el)=>{
      name+=el.nativeElement.value + ' ';

    })
    name.trim;
    this.fullName=name;
    console.log(this.fullName);
  }
}
