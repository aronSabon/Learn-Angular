import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef, private renderer : Renderer2) {

   }
   @Input('appClass') set display(value:Object){
   let entries= Object.entries(value);
    for(let item of entries){
      let [cssClass,condition] =item;
      if(condition)
      this.renderer.addClass(this.element.nativeElement,cssClass )
    }
  }

}
