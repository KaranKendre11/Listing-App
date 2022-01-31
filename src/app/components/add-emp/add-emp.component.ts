import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { BaseAddEdit } from '../base.addEdit.component';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
//add base class
export class AddEmpComponent extends BaseAddEdit<Employee>  implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

  
  id = 0
  addval(val: Employee){
    val.id = this.id
   this.addData(this.getData("empData"),val,"empData")
   this.id += 1
  }
 
  }



