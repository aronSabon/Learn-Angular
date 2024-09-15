import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../Models/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { TaskService } from '../../Services/task.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  // http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);
  editMode: boolean = false;
  selectedTask: Task;
  selectedTaskId: string = '';
  isLoading: boolean = false;
  currentTask:Task;

  errorMessage: string | null = null;
  errorSubscription : Subscription;

  ngOnInit(): void {
    this.fetchAllTaskData();
    this.errorSubscription=this.taskService.errorSubject.subscribe({next:(httpError) => {
      this.setErrorMessage(httpError);
    }});
  }
  // ngOnDestroy(){
  //   this.errorSubscription.unsubscribe();
  // }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {
      title: '',
      description: '',
      assignedTo: '',
      createdAt: '',
      priority: '',
      status: ''
    }
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }
  FetchAllTasks() {
    this.fetchAllTaskData();
  }
  CreateTaskOrUpdateTask(data: Task) {
    if (this.editMode) {
      //update task
      this.taskService.UpdateTask(this.selectedTaskId, data);
    }
    else {
      this.taskService.CreateTask(data);
      // this.fetchAllTaskData();
    }
  }
  private fetchAllTaskData() {
    this.isLoading = true;
    this.taskService.GetAllTaskData().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isLoading = false;
      }, error: (error) => {
        this.setErrorMessage(error);
        this.isLoading=false;
      }
    });
  }

  private setErrorMessage(err: HttpErrorResponse){
    if(err.error.error==='Permission denied'){
      this.errorMessage="you donot have permission to perform this action"
    }
    else{
      this.errorMessage=err.message;
    }
    setTimeout(() => {
      this.errorMessage=null;
    }, 3000);
  }


  DeleteTask(id: string | undefined) {
    this.taskService.DeleteTask(id);
    // this.fetchAllTaskData();
  }
  DeleteAllTasks() {
    this.taskService.DeleteAllTasks();
    // this.fetchAllTaskData();
  }
  EditTask(id: string | undefined) {
    this.selectedTaskId = id;
    this.showCreateTaskForm = true;
    this.editMode = true;
    this.selectedTask = this.allTasks.find((task) => {
      return task.id === id;
    });
  }
  OpenTaskDetails(id:string){
    this.showTaskDetails=true;
    this.taskService.GetTaskById(id).subscribe((data:Task) =>{
      this.currentTask=data;
    })

  }
  CloseTaskDetails(swit:boolean){
    this.showTaskDetails=swit;
  }
}
