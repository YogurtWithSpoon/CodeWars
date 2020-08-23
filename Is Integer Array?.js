function isIntArray1(array){
    if(isNaN(parseFloat(array))){
        if(array === undefined || array === null){
            return false;
        }
        if(array === ''){
            return false
        }
        if(array.length == 0){
            return true
        }
        return false;
    } else {
        for(item of array){
            if(isNaN(parseFloat(item)) || item === undefined || item === null || Math.ceil(item) !== item){
                return false;
            }    
        }
        return true;
    }
}
//smart solution 
function isIntArray(array){
    return Array.isArray(array) && array.every(x => { return Math.floor(x) === x})
}


console.log(isIntArray([])) //, true, "Input: []");
console.log(isIntArray([1, 2, 3, 4])) //, true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN])) 
console.log(isIntArray(undefined))
console.log(isIntArray([undefined]))
console.log(isIntArray(null))
console.log(isIntArray(NaN))
console.log(isIntArray(''))
console.log(isIntArray([NaN]))
console.log(isIntArray([null]))//, false, "Input: [1, 2, 3, NaN]");