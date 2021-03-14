function sortArray(array) {
  const odd = array.filter(item => item % 2 !== 0).sort((a,b) => a - b)
  return array.map(item => item % 2 == 0 ? item : odd.shift())
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) //, [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0])) //, [1, 3, 5, 8, 0]);
console.log(sortArray([ 5, 3, 2, 8, 1, 4, 11 ])) // [1, 3, 2, 8, 5, 4, 11]
console.log(sortArray([])) //,[]);