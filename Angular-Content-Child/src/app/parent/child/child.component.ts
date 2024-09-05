import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('para') paraEl:ElementRef;

  @ContentChild(TestComponent) selector:TestComponent;

  @ContentChildren('para') paraEls:QueryList<ElementRef>;

  @ContentChildren(TestComponent) selectors:QueryList <TestComponent>;

  showParaEl(){

    // console.log(this.paraEls)
    // console.log(this.selector.name)
    // this.paraEls.forEach((el)=>console.log(el.nativeElement));
    this.selectors.forEach((sl)=>{console.log(sl.name)})
  }
}
