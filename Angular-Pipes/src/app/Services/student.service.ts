import { Injectable } from "@angular/core";
import { Student } from "../../Models/Student";

@Injectable({
    providedIn:'root'
})

export class StudentService{
    students:Student[]=[
        new Student(1, 'john hanks', 'Male', new Date('11-01-1994'), 'Mba', 590 , 1899),
        new Student(2, 'henry norman', 'Male', new Date('07-11-2000'), 'B.Tech', 520 , 1200),
        new Student(3, 'irfan batter', 'Male', new Date('12-05-1988'), 'Bit', 420 , 9000),
        new Student(4, 'utahime uta', 'Female', new Date('01-04-1999'), 'BBA', 399 , 1899),
        new Student(5, 'truner oacry', 'Male', new Date('08-05-1957'), 'Bhm', 550 , 790)
    ];
    totalMarks=600;

    CreateStudent(name, gender, dob, course, marks, fee){
        let id = this.students.length+1;
        let student = new Student(id,name, gender,dob,course, marks, fee);
        this.students.push(student);
    }
    FilterStudentByGender(filterBy:string){
        if(filterBy.toLowerCase() === "all" || filterBy === '' || this.students.length=== 0){
            return this.students;
        }
        else {
            return this.students.filter((student)=>{
                return student.gender.toLowerCase()===filterBy.toLowerCase();
            })
        }
    }
}