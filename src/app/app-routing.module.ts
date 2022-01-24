import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepComponent } from './components/add-dep/add-dep.component';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { DepartmentComponent } from './components/department/department.component';
import { EditDepComponent } from './components/edit-dep/edit-dep.component';
import { EditEmpComponent } from './components/edit-emp/edit-emp.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path:'emp',component:EmployeeComponent},
  {path:'dep',component:DepartmentComponent},
  {path:'add-emp',component:AddEmpComponent},
  {path:'add-dep',component:AddDepComponent},
  {path:'edit-emp',component:EditEmpComponent},
  {path:'edit-dep',component:EditDepComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
