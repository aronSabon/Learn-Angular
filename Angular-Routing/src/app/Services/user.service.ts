import { Injectable } from "@angular/core";
import { User } from "../Models/user";


@Injectable({
    providedIn:'root'
})

export class UserService{

    users:User[]=[
        {id:1, name:'harlow', username:'hh', password: '12345'},
        {id:2, name:'benjamen', username:'bb', password: '12345'},
        {id:3, name:'umahime', username:'uu', password: '12345'},
        {id:4, name:'ichigo', username:'ii', password: '12345'},
    ]

}