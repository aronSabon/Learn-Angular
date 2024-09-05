import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    // let obs = new Observable((observer)=>{
    //   observer.next(Math.random());
    // })
    // let obs1= new ReplaySubject(2,1);
    // let obs1= new AsyncSubject();
    // let obs1 = new BehaviorSubject(100);
    // let obs1= new Subject();
    // obs.subscribe((value)=>{
    //   console.log(value)
    // });
    // obs.subscribe((value)=>{
    //   console.log(value)
    // });
    // obs1.next(1);
    // obs1.next(2);
    // obs1.next(3);
    // obs1.subscribe((value)=>{
    //   console.log(value)
    // });
    // obs1.subscribe((value)=>{
    //   console.log(value)
    // });

    // obs1.next(344);
    // obs1.complete();

    // obs1.subscribe((value)=>{
    //   console.log(value)
    // });

    // obs1.next(4545);
    // let data = ajax('https://randomuser.me/api/');
    
    // const subject = new Subject();
    // subject.subscribe((value)=>{
    //   console.log(value);
    // })
    // subject.subscribe((value)=>{
    //   console.log(value);
    // })
    // subject.subscribe((value)=>{
    //   console.log(value);
    // })
    // data.subscribe(subject);

    const promise = new Promise((resolve,reject)=>{
      resolve(100);
      resolve(200);
      resolve(300);

      console.log('promise is called')
    });
    promise.then((value)=>{
      console.log(value);
    })
    const obs = new Observable((observer)=>{
      console.log('observer is called');

      observer.next(100);
      observer.next(200);

      observer.next(300);

    });
    obs.subscribe((value)=>{
      console.log(value);
    });
  }
}
