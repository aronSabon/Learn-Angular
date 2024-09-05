import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

@HostBinding('value')inputText:string="hello host binding";

@HostListener('focus')focus(){
  console.log('focus from direvtive hostlistener');
}
  
  constructor() { }

}
