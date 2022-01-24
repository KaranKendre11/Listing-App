import { Component, OnInit } from '@angular/core';
import { BaseListing } from '../base.listing.component';
import { Department } from 'src/app/Models/Department';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent extends BaseListing<Department>
 implements OnInit {

  [x:string]:any;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.firstpage()
  }

  sortImg = 'assets/sort_name.png'
  departmentArray:Array<Department> = this.getData("localData2")

  searchval(val:Department){
    var dep_name = val.department_name
    dep_name = dep_name.toLowerCase()
    alert(dep_name)
    var searchArr: Array<Department> = this.searchVal(this.departmentArray,dep_name,"department_name")
    this.paginateArr = searchArr
  }

  // LOGIC FOR DELETING DATA
  deleteData(name:string){
    this.deleteVal(this.departmentArray,name,"localData2","department_name")
    this.firstpage()
  }

// LOGIC FOR SORTING DATA
 sortName(){
   this.departmentArray = this.sortArray(this.departmentArray,"department_name")
   localStorage.setItem("localData2",JSON.stringify(this.departmentArray))
   this.firstpage()
 }
 sortid(){
   
  this.departmentArray = this.sortArray(this.departmentArray,"department_id")
  localStorage.setItem("localData2",JSON.stringify(this.departmentArray))
  this.firstpage()
 }



//LOGIC FOR EDITING DATA
editingName = ""
editVal(val:Department){
}
// private router = Router
setVal(val:string){
 this.editingName = val
 localStorage.setItem("editData",this.editingName)
}


//LOGIC FOR PAGINATION
currentInd = 0;
rangeInd = this.currentInd+3;
paginateArr = new Array<Department>()
firstpage(){
this.currentInd = 0;
 this.rangeInd = this.currentInd+3;
this.paginateArr = this.paginatate(this.departmentArray,this.currentInd,this.rangeInd)
}
nextpage(){
this.currentInd += 3
this.rangeInd += 3
if(this.rangeInd > this.departmentArray.length) this.lastpage()
this.paginateArr = this.paginatate(this.departmentArray,this.currentInd,this.rangeInd)

}
prevpage(){
this.currentInd -= 3
this.rangeInd -= 3
if (this.currentInd < 0){this.firstpage()
this.currentInd = 0
}
else{
this.paginateArr = this.paginatate(this.departmentArray,this.currentInd,this.rangeInd)
}
}
lastpage(){
this.currentInd = this.departmentArray.length - 3
this.rangeInd = this.departmentArray.length
this.paginateArr= this.paginatate(this.departmentArray,this.currentInd,this.rangeInd)

}

}



 




