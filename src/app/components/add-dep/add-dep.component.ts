import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { BaseListing } from '../base.listing.component';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent extends BaseListing<Department> implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
  }
  addval(val: Department){
  this.addVal(this.getData("localData2"),val,"localData2")
  }

}


