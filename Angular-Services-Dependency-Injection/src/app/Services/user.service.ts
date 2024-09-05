import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User"
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {
    constructor(private loggerService: LoggerService) {

    }
    users: User[] = [
        new User('steve', 'Male', 'yearly', 'active'),
        new User('harry', 'Male', 'yearly', 'active'),
        new User('monica', 'Female', 'monthly', 'active')
    ];

    GetAllUsers() {
        return this.users;
    }
    OnShowUserDetailClicked: EventEmitter<User> = new EventEmitter<User>();
    OnShowUserDetail(user: User) {
        this.OnShowUserDetailClicked.emit(user);
    }

    CreateUser(name: string, gender: string, subType: string, status: string) {
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        this.loggerService.LogMessage(name, status);
    }
}