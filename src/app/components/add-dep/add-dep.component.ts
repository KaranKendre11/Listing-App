import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { BaseAddEdit } from '../base.addEdit.component';
import { BaseListing } from '../base.listing.component';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent extends BaseAddEdit<Department> implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
  }

  id = 0
  addval(val: Department){
    this.id += 1
    val.id = this.id
  this.addData(this.getData("depData"),val,"depData")
  }

}


