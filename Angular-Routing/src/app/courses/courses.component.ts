import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses: Course[];

  activeRoute:ActivatedRoute=inject(ActivatedRoute);
  searchString:string;

ngOnInit(): void {
  // this.searchString=this.activeRoute.snapshot.queryParams['search'];
  // this.searchString=this.activeRoute.snapshot.queryParamMap.get('search');
  this.activeRoute.queryParamMap.subscribe((value)=>{
    this.searchString=value.get('search');
    
  if(this.searchString===''||this.searchString===undefined||this.searchString===null){
    this.AllCourses=this.coursesService.courses;
  }
  else this.AllCourses=this.coursesService.courses.filter((course)=> course.title.toLowerCase().includes(this.searchString.toLowerCase()));
  })

}


}