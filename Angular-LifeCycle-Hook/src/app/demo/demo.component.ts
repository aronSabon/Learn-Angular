import { Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit,DoCheck{
  title:string='demo component';
  @Input() message:string;
  @ViewChild('elref') el:ElementRef;
  @ContentChild('projectedContent') pc:ElementRef;

constructor(){
  // console.log(
  //   'demo construdtor is called'
  // )
// console.log(this.title);
// console.log(this.message);
}

ngOnChanges(changes:SimpleChanges){
  console.log('ngonchanges called');
  // console.log(this.message);
  // console.log(changes)

}
ngOnInit(){
  console.log('ngoninit called')
  // console.log(this.el.nativeElement);
  }

  ngDoCheck(){
    console.log('ng docheck called')
    // console.log(this.pc);
  }
   ngAfterContentInit(){
    console.log('ngaftercontentinit is caalled')
    // console.log(this.pc);

   }
   ngAfterContentChecked(){
    console.log('ngAfterContentChecked is caalled')
  // console.log(this.pc.nativeElement);
  // console.log(this.el);

   }
   ngAfterViewInit(){
    console.log('ngafterviewinit called')
    // console.log(this.el);

   }
   ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
    // console.log(this.el.nativeElement.textContent)

   }
   ngOnDestroy(){
    console.log('ngOnDestroy called')

   }


}
