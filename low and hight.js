function highAndLow(string){
  let sortedArray = string.split(' ').sort((a,b) => b - a)
  return `${sortedArray.shift()} ${sortedArray.pop()}`
}  


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) //, "542 -214");)