import { NgModule } from "@angular/core";
import { LoaderComponent } from "./utils/loader/loader.component";
import { FormsModule } from "@angular/forms";
import { SnackbarComponent } from "./utils/snackbar/snackbar.component";

@NgModule({
    declarations:[
        LoaderComponent,
        SnackbarComponent,

    ],
    exports:[
        LoaderComponent,
        FormsModule,
        SnackbarComponent,

    ],
    imports:[
        FormsModule
    ]
})
export class SharedModule{

}