import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
createTask:string='';
CreateTask(){
  console.log(this.createTask);
  this.taskService.OnCreateTask(this.createTask);
}
taskService:TaskService=inject(TaskService);

}
