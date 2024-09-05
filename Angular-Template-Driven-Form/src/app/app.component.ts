import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Template-Driven-Form';
  firstName:string='';
  lastName:string='';
  country:string='Nepal';
  emailAddress:string='';
  dob:string="";
  genders=[
    {id:'check-male', display:'Male', value:'Male'},
    {id:'check-female', display:'Female', value:'Female'},
    {id:'check-other', display:'Other', value:'Other'},
  ];
  gender:string='Male';
  agreement:boolean=false;

  @ViewChild('registrationForm') form: NgForm;


  OnFormSubmitted() {
    console.log(this.form);
    console.log(this.form.value.firstName);
    console.log(this.form.value.lastName);
    console.log(this.form.value.address.country);
    console.log(this.form.controls["email"].value);
    // this.form.reset();
    this.form.form.patchValue({
      gender :'Male',
      address:{
        country:'Nepal'
      }

    })

  }
  OnCreateUsername(){
    let username:string = '';
    if(this.firstName.length>=3){
    username+=this.firstName.slice(0,3);
    }
    else{
      username+=this.firstName;
    }
    if(this.lastName.length>=3){
      username+=this.lastName.slice(0,3);
      }
      else{
        username+=this.lastName;
      }
    let date= new Date(this.dob);
    username+=date.getMonth();
    username+=date.getDay();
    username=username.toLowerCase();
    console.log(date.getMonth());
    console.log(date.getDay());
    console.log(date.getFullYear());
    console.log(date.getDay());


    // console.log(username);
    //   this.form.setValue({
    //     firstName:this.form.value.firstName,
    //     lastName:this.form.value.lastName,
    //     email:this.form.value.email,
    //     phoneNumber:this.form.value.phoneNumber,
    //     dob:this.form.value.dob,
    //     gender:this.form.value.gender,
    //     username: username,
    //     address: {
    //       city:this.form.value.address.city,
    //       country:this.form.value.address.country,
    //       postalCode:this.form.value.address.postalCode,
    //       region:this.form.value.address.region,
    //       street1:this.form.value.address.street1,
    //       street2:this.form.value.address.street2
    //     }
    //   });

    this.form.form.patchValue({
      username:username,
      address:{
        region:'wtf',
      }
    })
  }

}
