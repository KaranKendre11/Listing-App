import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addVal(val: any){
    var myArr = new Array()
    myArr = getData()
    var isPresent = 0
    for(var i=0;i<myArr.length;i++){
      if(myArr[i].name === val.name){
        isPresent = 1
      }
    }
    if(isPresent == 0){
     myArr.push(val)
   localStorage.setItem("localData",JSON.stringify(myArr));  
  }else{
    alert("This Employee already exists")
  }
  }
  }
function getData() {
  var str = localStorage.getItem("localData")
    if(str != null){
      var arr = JSON.parse(str)
    }else{
    var myArr = new Array()
    localStorage.setItem("localData",JSON.stringify(myArr))
    }
    return arr;
  
}


