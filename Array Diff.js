function arrayDiff(array,array2){
  for(item of array2){
    while(array.indexOf(item) != -1){
      array.splice(array.indexOf(item),1)
    }
  }
  return array
}




console.log(arrayDiff([], [4,5])) //, [], "a was [], b was [4,5]");
console.log(arrayDiff([3,4], [3])) //, [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], [])) //, [1,8,2], "a was [1,8,2], b was []");