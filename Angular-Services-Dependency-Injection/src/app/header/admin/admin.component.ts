import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { LoggerService } from '../../Services/logger.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[UserService]
})
export class AdminComponent {
constructor(private userService:UserService){
}

name:string='';
gender:string='Male';
subType:string='Yearly';
status:string='Active';

CreateNewUser(){
  this.userService.CreateUser(this.name,this.gender,this.subType,this.status);

}
}
