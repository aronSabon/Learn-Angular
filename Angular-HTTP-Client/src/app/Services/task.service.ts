import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Models/Task";
import { map } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TaskService{
    http:HttpClient = inject(HttpClient);


    CreateTask(task : Task){
        const headers = new HttpHeaders({'myheader': 'hello-world'});
        // console.log(data)
        this.http.post<{name: string}>(
          'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json',
          task,
          {headers : headers})
          .subscribe((response) => {
            console.log(response);
            // this.fetchAllTaskData();
          });
    }
    DeleteTask(id:string | undefined){
        this.http.delete(
            'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/'+id+'.json').subscribe((response) => {
              console.log(response);
            //   this.fetchAllTaskData();
            });
    }
    DeleteAllTasks(){
        this.http.delete(
            'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json').subscribe((response) => {
              console.log(response);
            //   this.fetchAllTaskData();
            });
    }
    FetchAllTaskData(){
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
}