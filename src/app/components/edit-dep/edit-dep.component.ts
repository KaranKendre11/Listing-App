import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { BaseListing } from '../base.listing.component';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent extends BaseListing<Department> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }
  valxx = JSON.stringify(localStorage.getItem("editData"))

  editVal(department:Department){
    if(department.department_name != "" && department.department_id != null){
    let depArray:Array<Department> = this.getData("localData2");
   // console.log(this.valxx)
    this.editData(depArray,department,"department_name",this.valxx)
    localStorage.setItem("localData2",JSON.stringify(depArray));
    alert("Data Updated")
    }else{
      alert("Enter Valid Data")
    }
  }

}
