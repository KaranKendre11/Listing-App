import { ModelBase } from "./ModelBase";

export class Employee extends ModelBase{
  public age:number;
  public name:string;
  constructor(){
   
      super();
      
      this.age=0;
      this.name= '';
  }


}



