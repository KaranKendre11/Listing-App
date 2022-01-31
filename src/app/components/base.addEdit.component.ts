
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { ModelBase } from "../Models/ModelBase";

export class BaseAddEdit<TBase extends ModelBase>{

    public array_for_listing: Array<TBase>;

    constructor() {
        this.array_for_listing = new Array<TBase>();
    }


    getPropType(inputArray: Array<TBase>, property: string): string {
        //Logic to determine if the input property is string / number

        let emptyStringArray: string[] = [];
        let indexNumber = 0;

        //[id, prop1, prop2]
        let keys = inputArray.length > 0 ? Object.keys(inputArray[0]) : emptyStringArray;

        //Logic to loop and find the index number that matches the property name
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === property) {
                indexNumber = i;
                break;
            }
        }

        //[1, 'karan', 23]
        let values = inputArray.length > 0 ? Object.values(inputArray[0]) : emptyStringArray;

        //find the value from the respective index number
        let specificValue = values[indexNumber];
        let propertyType: string = "string";

        //find the data-type of 'specificValue' to be number or string or boolean and then apply the sort logic
        if (typeof specificValue == "number") {
            propertyType = "number";
        }
        else if (typeof specificValue == "boolean") {
            propertyType = "boolean";
        }

        return propertyType;
    }

    //add pageSize and pagenumber in params
   

    addData(inputArray: Array<TBase>, value: TBase, storagename: string) {

        let emptyStringArray: string[] = [];
        let indexNumber = 0;
        let found = 0;
        //[id, prop1, prop2]
       // console.log(value.id)
        let keys = inputArray.length > 0 ? Object.keys(inputArray[0]) : emptyStringArray;
      //  console.log(inputArray[0][keys[0]])
        for(var i = 0;i<inputArray.length;i++){
                if(inputArray[i][keys[0]] == value[keys[0]]){
                    found = 1;
            }
        }
        if (found == 0) {
            inputArray.push(value)
            localStorage.setItem(storagename, JSON.stringify(inputArray))
        } else {
            alert("Data Already Exits!")
        }

    }

     //add pageSize and pagenumber in params
    getData(storagename: string): Array<TBase> {
        var array_to_return: Array<TBase> = new Array<TBase>();
        var str = localStorage.getItem(storagename)
        if (str != null) {
            array_to_return = JSON.parse(str)
        } else {
            localStorage.setItem(storagename, JSON.stringify(array_to_return))
        }
        return array_to_return
    }

   

    //consider pagenumber and pageSize
    searchVal(inputArray: Array<TBase>, val: string, property: string): Array<TBase> {
        var searched_array: Array<TBase> = new Array<TBase>();
        for (var i = 0; i < inputArray.length; i++) {
            var value_name = val
            var idx_name = inputArray[i][property].toLowerCase()
            if (value_name == idx_name) {
                searched_array.push(inputArray[i])
            }
        }
        return searched_array;
    }

    searchById(inputArray: Array<TBase>, id: number): TBase
    {
        let searchedRecord:TBase = Object.create(null);

        //code for searching the entire data based on id


        return searchedRecord;
    }

    //move to base add edit
    editData(inputArray: Array<TBase>, data: TBase, editing_id: string,database:string) {
        
        for (var i = 0; i < inputArray.length; i++) {
            let  val:string = '"'+JSON.stringify(inputArray[i].id)+'"'  
            if( val == editing_id){
                inputArray[i] = data
            }
            }
            localStorage.setItem(database,JSON.stringify(inputArray))
        }


}
