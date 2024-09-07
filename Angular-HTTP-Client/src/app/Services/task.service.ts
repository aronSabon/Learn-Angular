import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Models/Task";
import { map, Subject } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TaskService{
    http:HttpClient = inject(HttpClient);
    errorSubject = new Subject<HttpErrorResponse>();


    CreateTask(task : Task){
        const headers = new HttpHeaders({'myheader': 'hello-world'});
        // console.log(data)
        this.http.post<{name: string}>(
          'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json',
          task,
          {headers : headers})
          .subscribe({error: (err) => {
            this.errorSubject.next(err);
          }});
    }
    DeleteTask(id:string | undefined){
        this.http.delete(
            'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/'+id+'.json')
            .subscribe({error: (err) => {
              this.errorSubject.next(err);
            }});
    }
    DeleteAllTasks(){
        this.http.delete(
            'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json')
            .subscribe({error: (err) => {
              this.errorSubject.next(err);
            }});
    }      
    GetAllTaskData(){
        return this.http.get<{[key:string]: Task}>(
            'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json'
          ).pipe(map((response) => {
            //transform Data
            let tasks = [];
            for(let key in response){
              if(response.hasOwnProperty(key)){
              tasks.push({...response[key], id:key});
              }
            }
            return tasks;
          }));
    }
    UpdateTask(id:string | undefined,data:Task){
      this.http.put('https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/'+id+'.json',
        data).subscribe({error: (err) => {
          this.errorSubject.next(err);
        }});
    }
}