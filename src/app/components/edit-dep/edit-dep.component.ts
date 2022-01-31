import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { BaseAddEdit } from '../base.addEdit.component';
import { BaseListing } from '../base.listing.component';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent extends BaseAddEdit<Department> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }
  valxx = JSON.stringify(localStorage.getItem("editData"))

  editVal(department:Department){
    if(department.department_name != "" && department.department_id != null){
    let depArray:Array<Department> = this.getData("depData");
   // console.log(this.valxx)
    this.editData(depArray,department,this.valxx,"depData")
    alert("Data Updated")
    }else{
      alert("Enter Valid Data")
    }
  }

}
