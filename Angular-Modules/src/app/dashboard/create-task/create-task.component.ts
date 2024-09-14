import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Models/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();
  @Input() editMode:boolean=false;
  @Input() selectedTask:Task;
  @ViewChild('taskForm') taskForm:NgForm;

  ngAfterViewInit(){
    setTimeout(() => {
      this.taskForm.form.patchValue(this.selectedTask);

    }, 0);
  }

  

  OnCloseForm(){
    this.CloseForm.emit(false);  
  }
  OnFormSubmitted(form : NgForm){
    console.log(form.value);
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }
}
