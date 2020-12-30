function orderWeight(strng) {
  let array  = strng.split(' ')
  return array.sort((a,b) => {
    let first = a.split('').reduce((prev,curr) => Number(prev) + Number(curr))
    let second = b.split('').reduce((prev,curr) => Number(prev) + Number(curr))

    if(first < second){
      return -1
    }
    if(first > second){
      return 1
    }
    if(first === second){
      if(a < b){
        return -1
      }
      if(a > b){
        return 1
      }
    }
  }).join(' ')
}




console.log(orderWeight("103 123 4444 99 2000")) 
//"2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
///11 11 2000 10003 22 123 1234000 44444444 9999")