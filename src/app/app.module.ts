import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { FormsModule } from '@angular/forms';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { AddDepComponent } from './components/add-dep/add-dep.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';
import { RouterModule } from '@angular/router';
import { EditDepComponent } from './components/edit-dep/edit-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    AddEmpComponent,
    AddDepComponent,
    EditEmpComponent,
    EditDepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
