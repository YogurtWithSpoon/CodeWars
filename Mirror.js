function mirror(array) {
  let result = array.slice();
  let sorted = result.sort((a, b) => a - b); 
  let mirror = sorted.slice().reverse().slice(1,array.length)
  mirror.map(item => {
    result.push(item)
  })
  return result
}

console.log(mirror([])); // == []
console.log(mirror([1])); // == [1]
console.log(mirror([2, 1])); // == [1, 2, 1]
console.log(mirror([1, 3, 2]));
console.log(mirror([1, 3, 2, 5])); // == [1, 2, 3, 2, 1]
console.log(mirror([-8, 42, 18, 0, -16])); // == [-16, -8, 0, 18, 42, 18, 0, -8, -16]
