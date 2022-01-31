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
  departmentArray:Array<Department> = this.getData("depData")

  searchval(val:Department){
    var dep_name = val.department_name
    dep_name = dep_name.toLowerCase()
    alert(dep_name)
    var searchArr: Array<Department> = this.searchVal(this.departmentArray,dep_name,"department_name")
    this.paginateArr = searchArr
  }

  // LOGIC FOR DELETING DATA
  deleteData(name:string){
    this.deleteVal(this.departmentArray,name,"depData","department_name")
    this.firstpage()
  }

// LOGIC FOR SORTING DATA
   depnameAsc = false
   depidAsc = false
   sortarr(s: string){
     if(s == "department_name"){
    this.departmentArray =  this.sortArray(this.getData("depData"),s,this.depnameAsc)
     localStorage.setItem("depData",JSON.stringify(this.departmentArray))
     if(this.depnameAsc == false) this.depnameAsc = true
     else if(this.depnameAsc == true) this.depnameAsc = false
     this.firstpage()
     }else{
      this.departmentArray =  this.sortArray(this.getData("depData"),s,this.depidAsc)
      localStorage.setItem("depData",JSON.stringify(this.departmentArray))
      if(this.depidAsc == false) this.depidAsc = true
      else if(this.depidAsc == true) this.depidAsc = false
      this.firstpage()
     }
   }


//LOGIC FOR EDITING DATA
editingid = -1
editVal(val:Department){
}
// private router = Router
setVal(val:number){
 this.editingid = val
 localStorage.setItem("editData",JSON.stringify(this.editingid))
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



 




