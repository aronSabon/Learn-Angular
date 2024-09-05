import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Models/user';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent {
@Input() userToDelete:User;

@Output() 
OnConfirmation: EventEmitter<boolean> = new EventEmitter<boolean>();

OnConfirmationBtnClicked(value:boolean){
  this.OnConfirmation.emit(value)
}

OnOkClicked(value:boolean){
this.OnConfirmationBtnClicked(value);
}
OnCancelClicked(value:boolean){
this.OnConfirmationBtnClicked(value);
}
}
