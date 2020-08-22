function validate(number){
    let array = String(number).split('')
    let double = array.map((item,index) => {
        if(array.length % 2){
            return index % 2 != 0 ? item*=2 : item
        } else {
            return index % 2 == 0 ? item*=2 : item
        }
    })
    let overNine = double.map(item => {
        return item > 9 ? Number(item - 9) : Number(item)
    })
    let sum = overNine.reduce((a,b) => a+b,0)
    return sum % 10 == 0
}



console.log(validate(123)) //, false);
console.log(validate(1)) //, false);
console.log(validate(2121)) //, true);
console.log(validate(1230)) //, true);
console.log(validate(891))