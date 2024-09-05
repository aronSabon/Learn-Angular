import { AbstractControl, FormControl } from "@angular/forms";

// export const noSpaceAllowed = (control:FormControl) => {
//   if(control.value !=null && control.value.indexOf(' ') !=- 1 ){
//     return {noSpaceAllowed: true}
//   }
//   return null;
// }
export class CustomValidators {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != - 1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }

  static checkUsername(control:AbstractControl): Promise<any>{
    return userNameAllowed(control.value);
  }
}

function userNameAllowed(username: string){
  const takenUsernames = ['johnsmith', 'manojjha', 'sarahking'];

  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      if(takenUsernames.includes(username)){
        resolve({checkUsername: true});
      }
      else{
        resolve(null);
      }
    },3000);
  });
}

