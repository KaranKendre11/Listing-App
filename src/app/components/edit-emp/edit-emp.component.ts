import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { BaseListing } from '../base.listing.component';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent extends BaseListing<Employee> implements OnInit {


  constructor() { 
    super()
  }

  ngOnInit(): void {
    
  }
  valxx = JSON.stringify(localStorage.getItem("editData"))

  editVal(employee:Employee){
    if(employee.name != "" && employee.age != null){
    let employeeArray:Array<Employee> = this.getData("localData");
   // console.log(this.valxx)
    this.editData(employeeArray,employee,"name",this.valxx)
    localStorage.setItem("localData",JSON.stringify(employeeArray));
    alert("Data Updated")
    }else{
      alert("Enter Valid Data")
    }
  }
}
