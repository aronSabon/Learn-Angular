import { Injectable } from "@angular/core";
import { Course } from "../Models/course";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CourseService{
    private description: string = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum."`;

    courses: Course[] = [
        { id: 1, title: 'Complete Modern JavaScript Course', price: 499, desc: this.description, image: 'course1.jpg', rating: 4.5, duration: 18.2, author: 'Steve smith'},
        { id: 2, title: 'A complete Angular Course', price: 599, desc: this.description, image: 'course2.jpg', rating: 4.9, duration: 20.8, author: 'Sarah King'},
        { id: 3, title: 'A Complete Node JS Bootcamp', price: 449, desc: this.description, image: 'course3.jpg', rating: 3.7, duration: 16.6, author: 'Mark Vought'},
        { id: 4, title: 'A Complete React Developer Course', price: 599, desc: this.description, image: 'course4.jpg', rating: 4.8, duration: 28.2, author: 'Sarah King'},
        { id: 5, title: 'ASP.NET Core with Web API', price: 649, desc: this.description, image: 'course5.jpg', rating: 3.5, duration: 34.4, author: 'Steve smith'},
       
    ]

    getAllcourses(){
        return new Observable<Course[]>((sub) => {
            setTimeout(() => {
                sub.next(this.courses);
            }, 5000)
        })
    }
}