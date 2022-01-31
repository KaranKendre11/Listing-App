
import { ModelBase } from "../Models/ModelBase";

export class BaseListing<TBase extends ModelBase>{

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
        //find the data-type of 'specificValue' to be number or string  and then apply the sort logic
        if (!isNaN(specificValue)) {
            propertyType = "number";
        }
        return propertyType;
    }

    sortArray(inputArray: Array<TBase>, property: string, isAsc: boolean): Array<TBase> {

        let propertyType:string = this.getPropType(inputArray,property);
    //89 vs 110 
    switch (propertyType) {

        case "string":
            //call the method that will sort based on string 
            for (var i = 0; i < inputArray.length; i++) {
                for (var j = i + 1; j < inputArray.length; j++) {
                    if (isAsc) {
                        if ((inputArray[i][property].toLowerCase() > inputArray[j][property].toLowerCase())) {
                            var temp = inputArray[i]
                            inputArray[i] = inputArray[j]         
                            inputArray[j] = temp
                        }
                    }
                    else if (!isAsc) {
                        if (inputArray[i][property].toLowerCase() < inputArray[j][property].toLowerCase()) {
                            var temp = inputArray[i]
                            inputArray[i] = inputArray[j]
                            inputArray[j] = temp
                        }
                    }
                }
            }
            return inputArray
            break;

        case "number":
            //call the method that will sort based on number 
            for (var i = 0; i < inputArray.length; i++) {
                for (var j = i + 1; j < inputArray.length; j++) {
                    if (isAsc) {
                        if ((inputArray[i][property] > inputArray[j][property])) {
                            var temp = inputArray[i]
                            inputArray[i] = inputArray[j]
                            inputArray[j] = temp
                        }
                        
                    }
                    else if (!isAsc) {
                        if (inputArray[i][property] < inputArray[j][property]) {
                            var temp = inputArray[i]
                            inputArray[i] = inputArray[j]
                            inputArray[j] = temp
                        }
                        
    
                    }
                }
            }
            return inputArray
            break;
        default:
            for (var i = 0; i < inputArray.length; i++) {
                for (var j = i + 1; j < inputArray.length; j++) {
                    if (isAsc) {
                        if ((inputArray[i][property].toLowerCase() > inputArray[j][property].toLowerCase())) {
                            var temp = inputArray[i]
                            inputArray[i] = inputArray[j]
                            inputArray[j] = temp
                        }
                    }
                    else if (!isAsc) {
                        if (inputArray[i][property].toLowerCase() < inputArray[j][property].toLowerCase()) {
                            var temp = inputArray[i]
                            inputArray[i] = inputArray[j]
                            inputArray[j] = temp
                        }
                    }
                }
            }
            return inputArray
            break;
    }

    
}
deleteVal(inputArray: Array<TBase>, val: string, storagename: string, property: string) {
    for (var i = 0; i < inputArray.length; i++) {
        if (val == inputArray[i][property]) {
            inputArray.splice(i, 1)
        }
    }
    localStorage.setItem(storagename, JSON.stringify(inputArray))
}

 
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


    paginatate(inputArray: Array<TBase>, start: number, end: number): Array<TBase> {
        let paginateArr: Array<TBase> = new Array<TBase>()
        for (var i = start; i < end; i++) {
            paginateArr.push(inputArray[i])
        }
        if (inputArray.length < 3) {
            return inputArray
        }

        return paginateArr
    }
}
