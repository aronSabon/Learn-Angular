import { ViewChild,AfterViewInit } from '@angular/core';
import { Component, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { from, Observable, of } from 'rxjs';
import{map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  implements AfterViewInit{
  title = 'AngularObservables';

  data: any[] = [];
  array1=[1,2,3,4,5];
  array2=['A','B','C','D'  ]

@ViewChild('createData')
  createBtn:ElementRef;

  buttonClickedObs;

  // myObservables = new Observable((observer) => {
  //   setTimeout(() => { observer.next(1) }, 1000);
  //   setTimeout(() => { observer.next(2) }, 2000);
  //   //  setTimeout(()=>{observer.error(new Error('Something went wrong'))},2000);
  //   setTimeout(() => { observer.next(3) }, 1000);
  //   setTimeout(() => { observer.next(4) }, 3000);
  //   setTimeout(() => { observer.next(5) }, 4000);
  //   setTimeout(() => { observer.complete() }, 5000);
  // })
  // myObservables=of(this.array1,this.array2,20,30,'hello',true);
  promiseData =new Promise((resolve,reject)=>{
    resolve([1,2,3,4,5]);
  })
  myObservables=from([1,2,3,4,5]).pipe(map((val)=>{
    return val*3;
  }),
  filter((val,i)=>{
    return val%2===0;
  }));
  // newObs=this.myObservables.pipe(map((val)=>{
  //   return val*5;
  // }), filter((val,i)=>{
  //   return val%3===0;
  // }));

  // filteredObs=this.newObs.pipe(filter((val,i)=>{
  //   return val%3===0;
  // }));
  // GetAsyncData() {
  //   this.myObservables.subscribe((val: any) => {
  //     this.data.push(val);
  //   },
  //     (err) => {
  //       alert(err.message)
  //     },
  //     () => {
  //       alert('all the data is streamedd!')
  //     })
  // }
  GetAsyncData(){
    this.myObservables.subscribe({
      next:(val:any)=>{
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('all the data is streamedd!');
      }
    })
  }

// btnClicked(){
//   let count=0;
//   this.buttonClickedObs=fromEvent(this.createBtn.nativeElement,'click')
//                     .subscribe((data)=>{
//                       console.log(data);
//                       this.showData(++count);
//                     });
  
// }

ngAfterViewInit(){
  // this.btnClicked();
}
// showData(val){
//   let div=document.createElement('div');
//   div.innerText='item'+' '+val;
//   document.getElementById('container').append(div);
// }
}
