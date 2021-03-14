function deleteNth(array, stop) {
  let count = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      if (count < stop) {
        result.push(array[i]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)); //, [20,37,21])
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //, [1, 1, 3, 3, 7, 3, 2, 2])
