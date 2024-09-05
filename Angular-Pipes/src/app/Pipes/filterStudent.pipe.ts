import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../../Models/Student";

@Pipe({
    name: 'filterStudent',
    pure: false
})
export class FilterStudentPipe implements PipeTransform{
    transform(list: Student[], filterBy:string,  ...args: any[]) {
        console.log('filter pipe called');
        if(filterBy.toLowerCase() === "all" || filterBy === '' || list.length=== 0){
            return list;
        }
        else {
            return list.filter((student)=>{
                return student.gender.toLowerCase()===filterBy.toLowerCase();
            })
        }
    }

}