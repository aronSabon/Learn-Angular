import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {
  counter=interval(1000);
  unsubscribe1;
  unsubscribe2;
  unsubscribe3;

  data1:number[]=[];
  data2:number[]=[];
  data3:number[]=[];

  OnSubscribe1(){
   this.unsubscribe1= this.counter.subscribe((val)=>{
      this.data1.push(val);
    })
  }
  OnUnsubscribe1(){
    this.unsubscribe1.unsubscribe();
  }
  OnSubscribe2(){
    this.unsubscribe2= this.counter.subscribe((val)=>{
       this.data2.push(val);
     })
   }
   OnUnsubscribe2(){
     this.unsubscribe2.unsubscribe();
   }
   OnSubscribe3(){
    this.unsubscribe3= this.counter.subscribe((val)=>{
       this.data3.push(val);
     })
   }
   OnUnsubscribe3(){
     this.unsubscribe3.unsubscribe();
   }
}
