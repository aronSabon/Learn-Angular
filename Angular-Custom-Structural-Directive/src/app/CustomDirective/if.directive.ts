import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template : TemplateRef<any>,private viewContainer : ViewContainerRef ) {

   }
@Input('appIf') set display(condition:boolean){
  if(condition){
    this.viewContainer.createEmbeddedView(this.template);
  }
  else{
    this.viewContainer.clear;
  }

}
}
