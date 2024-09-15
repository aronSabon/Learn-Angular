import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from "@angular/router";
import { StatsComponent } from './stats/stats.component';
import { DashboardRouteModule } from "./dashboard-route.module";



@NgModule({
    declarations:[
        DashboardComponent,
        TaskDetailsComponent,
        CreateTaskComponent,
        OverviewComponent,
        StatsComponent,

    ],
    exports:[
        // DashboardComponent,
        // TaskDetailsComponent,
        // CreateTaskComponent,
        SharedModule,
        DashboardRouteModule
        ],
    imports:[
            CommonModule,
            SharedModule,
            RouterModule,

        ]
})
export class DashBoardModule{

}