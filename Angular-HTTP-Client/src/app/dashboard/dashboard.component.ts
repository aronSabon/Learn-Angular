import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  // http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);

  ngOnInit(): void {
    this.fetchAllTaskData();
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }
  FetchAllTasks() {
    this.fetchAllTaskData();
  }
  CreateTask(data: Task) {
    this.taskService.CreateTask(data);
    // this.fetchAllTaskData();
  }
  private fetchAllTaskData() {
    this.taskService.FetchAllTaskData().subscribe((tasks) => {
      this.allTasks = tasks;
    });
  }
  DeleteTask(id: string | undefined) {
    this.taskService.DeleteTask(id);
    // this.fetchAllTaskData();
  }
  DeleteAllTasks() {
    this.taskService.DeleteAllTasks();
    // this.fetchAllTaskData();
  }
  EditTask(id:string | undefined){
    this.showCreateTaskForm= true;
  }
}
