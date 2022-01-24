import { ModelBase } from "./ModelBase";

export class Department extends ModelBase{
    public department_name:string;
    public department_id:number;
    constructor(){
        super()
        this.department_id = 0
        this.department_name = ''
    }
}