import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  ngOnInit(): void {
    this.fetchAllTaskData();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }
  FetchAllTasks(){
    this.fetchAllTaskData();
  }
  CreateTask(data : Task){
    const headers = new HttpHeaders({'myheader': 'hello-world'});
    // console.log(data)
    this.http.post<{name: string}>(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json',
      data,
      {headers : headers})
      .subscribe((response) => {
        console.log(response);
        this.fetchAllTaskData();
      });
  }
  private fetchAllTaskData(){
    this.http.get<{[key:string]: Task}>(
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
    }))
    .subscribe((tasks) => {
      this.allTasks=tasks;
      console.log(tasks);
    })
  }
  DeleteTask(id:string | undefined){
    this.http.delete(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/'+id+'.json').subscribe((response) => {
        console.log(response);
        this.fetchAllTaskData();

      });
  }
  DeleteAllTasks(){
    this.http.delete(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json').subscribe((response) => {
        console.log(response);
        this.fetchAllTaskData();

      });

  }

}
