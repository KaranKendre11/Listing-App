
import { ModelBase } from "../Models/ModelBase";

export class BaseListing<TBase extends ModelBase>{

    public array_for_listing:Array<TBase>;

    constructor(){
        this.array_for_listing = new Array<TBase>();
    }

    sortArray(inputArray:Array<TBase>,property:string):Array<TBase>{
        for(var i=0;i<inputArray.length;i++){
            for(var j=i+1;j<inputArray.length;j++){
                if(inputArray[i][property].toLowerCase() > inputArray[j][property].toLowerCase() ){
                    var temp = inputArray[i]
                    inputArray[i] = inputArray[j]
                    inputArray[j] = temp
                }
            }
        }
        return inputArray
    }
    
    addVal(inputArray:Array<TBase>,value:TBase,storagename:string){
        var found = 0
        for(var i =0;i<inputArray.length;i++){
            if(inputArray[i]["department_name"] == value["department_name"]) found = 1
        }
        if(found == 0){
        inputArray.push(value)
        localStorage.setItem(storagename,JSON.stringify(inputArray))
        }else{
            alert("Data Already Exits!")
        }

    }
    getData(storagename:string):Array<TBase>{
        var array_to_return :Array<TBase> = new Array<TBase>();
        var str = localStorage.getItem(storagename)
        if(str != null){
            array_to_return = JSON.parse(str)
        }else{
            localStorage.setItem(storagename,JSON.stringify(array_to_return))
        }
        return array_to_return
    }
    deleteVal(inputArray:Array<TBase>,val:string,storagename:string,property:string){
        for(var i =0;i<inputArray.length;i++){
            if(val == inputArray[i][property]){
                inputArray.splice(i,1)
            }
        }
        localStorage.setItem(storagename,JSON.stringify(inputArray))
    }
    searchVal(inputArray:Array<TBase>,val:string,property:string):Array<TBase>{
         var searched_array:Array<TBase>  = new Array<TBase>();
        for(var i =0;i<inputArray.length;i++){
            var value_name = val
            var idx_name = inputArray[i][property].toLowerCase()
            if(value_name == idx_name){
                searched_array.push(inputArray[i]) 
            }
        }
        return searched_array;
    }
    
    editData(inputArray:Array<TBase>,data:TBase,property:string,value:string){
        for(var i =0;i<inputArray.length;i++){
            var temp = JSON.stringify(inputArray[i][property].toLowerCase())   
         if(temp === value.toLowerCase()){
             inputArray[i] = data
            }
        }
    
    }
    
    paginatate(inputArray:Array<TBase>,start:number,end:number):Array<TBase>{
        let paginateArr:Array<TBase> = new Array<TBase>()
        for(var i =start;i<end;i++){
            paginateArr.push(inputArray[i])
        }
        if(inputArray.length <3){
            return inputArray
        }

        return paginateArr
    }
}
