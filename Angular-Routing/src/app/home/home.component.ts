import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  router:Router=inject(Router);
  activeRoute: ActivatedRoute=inject(ActivatedRoute);
searchText:string;
// OnSearchClicked(value){
// console.log(value);
// this.router.navigate(['Courses'], {queryParams:{search:value}})
// }
NavigateToCourses(){
this.router.navigate(['Courses']);
  // this.router.navigate(['Courses'],{relativeTo:this.activeRoute});
  //by default navigate is absolutePath
  // this.router.navigateByUrl('Courses');
}
// ngOnInit(): void {
//   this.activeRoute.fragment.subscribe((data)=>{
//     console.log(data);
//     this.JumpToSection(data);
//   })
// }
// JumpToSection(section){
//   if (typeof document !== 'undefined') {
//     document.getElementById(section).scrollIntoView({behavior:'smooth'});
//   }
// }
}
