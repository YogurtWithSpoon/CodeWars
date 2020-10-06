function addArrays(array1, array2) {
  if(array1.length == 0 && array2.length == 0){
    return []
  }
  let arrayToNumber1 = parseInt(array1.join('')) || 0;
  let arrayToNumber2 = parseInt(array2.join('')) || 0;
  let sum = String(arrayToNumber1 + arrayToNumber2).split('')
  if(sum[0] == '-'){
    let removeFirst = sum.slice(1)
    removeFirst[0] = -removeFirst[0]
    sum = removeFirst
  }
  return sum.map(item => Number(item))
}



console.log(addArrays([3,2,6,6],[-7,2,2,8])) //, [ 1, 3, 4 ]))
console.log(addArrays([ 6, 7 ],[]))// --> [5,9,6]