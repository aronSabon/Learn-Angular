import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomValidators } from './Validators/noSpaceAllowed.valiadtor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular-Reactive-Form';
  formStatus: string = '';
  formData:any='';

  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null,
        [Validators.required,
        Validators.email]),
      username: new FormControl(null,
        Validators.required,
        CustomValidators.checkUsername),
      dob: new FormControl(null),
      gender: new FormControl('male'),

      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('Nepal', Validators.required),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
      experience: new FormArray([
      ])
    })
    // valueChanges on form control
    // this.reactiveForm.get('firstName').valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    //value changes on formGroup
    // this.reactiveForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
    //status changes on form control
    // this.reactiveForm.get('username').statusChanges.subscribe((status) =>{
    //   console.log(status);
    // });
    //status changes on formgroup
    this.reactiveForm.statusChanges.subscribe((status) => {
      this.formStatus = status;
      console.log(status);
    });

  }
  OnFormSubmitted() {
    this.formData=this.reactiveForm.value;
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
    // this.reactiveForm.get('gender').setValue('male');
    // this.reactiveForm.get('address.country').setValue('Nepal');
    this.reactiveForm.patchValue({
      gender: 'male',
      address:{
        country: 'Nepal'
      }
    });
  }
  AddSkills() {
    (<FormArray>this.reactiveForm.get('skills'))
      .push(new FormControl(null, Validators.required))
  }
  DeleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
  AddExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }
  DeleteExperience(index: number) {
    const formArray = (<FormArray>this.reactiveForm.get('experience'));
    formArray.removeAt(index);
  }
  username: string = "";

  CreateUsername() {
    let username = '';
    const firstName = this.reactiveForm.get('firstName').value;
    const lastName = this.reactiveForm.get('lastName').value;
    const dob = this.reactiveForm.get('dob').value;
    if(firstName.length>=3){
      username+=firstName.slice(0,3);
    }
    else{
      username+=firstName;
    }
    if(lastName.length>=3){
      username+=lastName.slice(0,3);
    }
    else{
      username+=lastName;
    }
    let date = new Date(dob);
    username+=date.getMonth();
    username+=date.getDay();
    username=username.toLowerCase();
    console.log(username);


    //set value on formgroup
    // this.reactiveForm.setValue({

    //     firstName: this.reactiveForm.get('firstName').value,
    //     lastName: this.reactiveForm.get('lastName').value,
    //     email: this.reactiveForm.get('email').value,
    //     username:username,
    //     dob:this.reactiveForm.get('dob').value,
    //     gender:this.reactiveForm.get('gender').value,

    //     address:{
    //       street: this.reactiveForm.get('address.street').value,
    //       country:this.reactiveForm.get('address.country').value,
    //       city:this.reactiveForm.get('address.city').value,
    //       region:this.reactiveForm.get('address.region').value,
    //       postal:this.reactiveForm.get('address.postal').value
    //     },
    //     skills: this.reactiveForm.get('skills').value,
    //     experience: this.reactiveForm.get('experience').value,
    // });

    // setValue in formControl
    // this.reactiveForm.get('username').setValue(username);

    //patchValue in formgroup
    this.reactiveForm.patchValue({
      username:username,
      address:{
        city:'Bkt'
      }
    });
  }

}

