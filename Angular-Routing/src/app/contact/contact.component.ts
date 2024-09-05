import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  firstName:string='';
  lastName:string='';
  country:string='';
  subject:string='';
  isSubmit:Boolean=false;


  OnSubmitClicked(){
    this.isSubmit=true;
  }
  CanExit(){
   if((this.firstName ||this.lastName||this.country||this.subject) && !this.isSubmit){
     return confirm('You have unsaved changes. Do you want to continue');
    }
    else{return true;}
  }


}

