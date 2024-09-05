import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  OnSubscribeClicked(type:string){
    //add user to database
    //send email with subscription detail
    //allow user to access the services
    alert("thankyou for ypur "+type+" subscribing. You can access the services now")
  }
}
