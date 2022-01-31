
import { Component, OnInit, Output } from '@angular/core';

import { BaseListing } from '../base.listing.component';
import { Employee } from 'src/app/Models/Employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  
})


export class EmployeeComponent 
    extends BaseListing<Employee> 
        implements OnInit {


  [x: string]: any;

  constructor() {
    super();
      //this.array_for_listing
      
    //this.array_for_listing
  }
  
  ngOnInit(): void {  
    this.firstpage()
  }
  sortImg = 'assets/sort_name.png'
 
  // THIS IS THE MAIN ARRAY
  employeeArray:Array<Employee> = this.getData("empData");
  
  
  // LOGIC FOR SEARCHING
  searchval(val:Employee){
    var value = val.name.toLowerCase()
    var searchArr : Array<Employee> = new Array<Employee>();
    searchArr = this.searchVal(this.employeeArray,value,"name")
    this.paginateArr = searchArr
  }
 
  // LOGIC FOR DELETING DATA
    deleteData(name:string){
      this.deleteVal(this.employeeArray,name,"empData","name")
      this.firstpage()
    }
  
// LOGIC FOR SORTING DATA
   nameAsc = false
   ageAsc = false
   sortarr(s: string){
     if(s == "name"){
    this.employeeArray =  this.sortArray(this.getData("empData"),s,this.nameAsc)
     localStorage.setItem("empData",JSON.stringify(this.employeeArray))
     if(this.nameAsc == false) this.nameAsc = true
     else if(this.nameAsc == true) this.nameAsc = false
     this.firstpage()
     }else{
      this.employeeArray =  this.sortArray(this.getData("empData"),s,this.ageAsc)
      localStorage.setItem("empData",JSON.stringify(this.employeeArray))
      if(this.ageAsc == false) this.ageAsc = true
      else if(this.ageAsc == true) this.ageAsc = false
      this.firstpage()
     }
   }
 

 //LOGIC FOR EDITING DATA
 editingid = -1
 editVal(val:Employee){
 }
// private router = Router
 setVal(val:number){
   this.editingid = val
   localStorage.setItem("editData",JSON.stringify(this.editingid))
 }
 

//LOGIC FOR PAGINATION
currentInd = 0;
rangeInd = this.currentInd+3;
paginateArr = new Array<Employee>()
firstpage(){
  this.currentInd = 0;
   this.rangeInd = this.currentInd+3;
  this.paginateArr = this.paginatate(this.employeeArray,this.currentInd,this.rangeInd)
}
nextpage(){
  this.currentInd += 3
  this.rangeInd += 3
  if(this.rangeInd > this.employeeArray.length) this.lastpage()
  this.paginateArr = this.paginatate(this.employeeArray,this.currentInd,this.rangeInd)
  
}
prevpage(){
  this.currentInd -= 3
  this.rangeInd -= 3
  if (this.currentInd < 0){this.firstpage()
  this.currentInd = 0
  }
  else{
  this.paginateArr = this.paginatate(this.employeeArray,this.currentInd,this.rangeInd)
  }
}
lastpage(){
  this.currentInd = this.employeeArray.length - 3
  this.rangeInd = this.employeeArray.length
  this.paginateArr= this.paginatate(this.employeeArray,this.currentInd,this.rangeInd)
 
}

}


