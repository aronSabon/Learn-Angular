import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OverviewComponent } from './overview/overview.component';

@NgModule({
    declarations:[
        DashboardComponent,
        TaskDetailsComponent,
        CreateTaskComponent,
        OverviewComponent,
    ],
    exports:[
        DashboardComponent,
        TaskDetailsComponent,
        CreateTaskComponent,
        SharedModule
        ],
    imports:[
            CommonModule,
            SharedModule
            
        ]
})
export class DashBoardModule{

}