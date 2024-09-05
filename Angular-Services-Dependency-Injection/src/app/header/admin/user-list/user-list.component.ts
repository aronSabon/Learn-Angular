import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {
  }
  userList: User[];
  ngOnInit(): void {
    let userList = this.userService.GetAllUsers();
    this.userList = userList;
  }

  OnShowUserDetail(user:User){
    this.userService.OnShowUserDetail(user);

  }

}
