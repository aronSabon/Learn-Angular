import { Component, inject, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users:User[]=[];
  userService:UserService=inject(UserService);
  showonfirmDelteComponent:boolean=false;
  userToDelete:User;
  ngOnInit(): void {
    this.users=this.userService.users;

  }
  OnDeleteClicked(user:User){
    this.showonfirmDelteComponent= true;
    this.userToDelete=user;
  }
  OnUserDeletionConfirm(value:boolean){
    this.showonfirmDelteComponent=false;
    if(value){
      let index = this.userService.users.indexOf(this.userToDelete);
      this.userService.users.splice(index, 1);
    }
  }


}
