import { Component, computed, DoCheck, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements DoCheck{
  counter=signal(0);
  message=signal<string[]>([]);
doubleCounter= computed(()=>this.counter() * 2);

constructor(){
  effect(() => console.log('new counter value is:'+ this.counter()))
}

  increment(){
    // this.counter.set(this.counter()+1);
    this.counter.update((prevValue) => prevValue+1)
    this.message.update((prevMessage)=>[...prevMessage,'current value of counter is:' + this.counter()])
    //mutate not working
    // this.message.mutate((prevMessage)=> prevMessage.push('current value of counter is :' + this.counter()))
  }
  decrement(){
    this.counter.update((prevValue) => prevValue-1)
    this.message.update( (prevMessage) =>{
      const updatedMessage=[...prevMessage];
      updatedMessage.pop();
      return updatedMessage;
    })

  }
  ngDoCheck(): void {
    console.log('change detection called')
  }

}
