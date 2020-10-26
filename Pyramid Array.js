function pyramid(number){
    let result = [];
    for(let i = 1 ; i <= number; i++){
        let array = []
        array.length = i;
        array.fill(1)
        result.push(array)
    }
    return result
}



console.log(pyramid(0)) // => [ ]
console.log(pyramid(1)) // => [ [1] ]
console.log(pyramid(2)) // => [ [1], [1, 1] ]
console.log(pyramid(3)) // => [ [1], [1, 1], [1, 1, 1] ]