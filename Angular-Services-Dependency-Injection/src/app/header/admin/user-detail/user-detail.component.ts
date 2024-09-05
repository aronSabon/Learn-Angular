import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{
selectedUser:User;
userService=inject(UserService);

ngOnInit(): void {
  this.userService.OnShowUserDetailClicked.subscribe((data:User) =>{
    this.selectedUser=data;
    
  })
}
}
