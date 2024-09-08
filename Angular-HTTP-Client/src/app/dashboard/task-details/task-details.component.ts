import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  @Output()
  CloseTaskDetails:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  OnCloseTaskDetails(){
    this.CloseTaskDetails.emit(false);
  }
  
  @Input() taskDetail:Task ;

}
