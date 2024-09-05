import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PercentagePipe } from './Pipes/percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterStudentPipe } from './Pipes/filterStudent.pipe';

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    PercentagePipe,
    FilterStudentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
