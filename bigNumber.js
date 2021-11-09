function nextBigger(n) {
  let arr = String(n).split('')
  let end = arr.length - 1;
  let move = []
  let restArr = []
  while (end > 0) {
    move.push(arr[end])
    if (arr[end] > arr[end - 1]) {
      restArr = arr.slice(0, end)
      break;
    }
    end--;
  }
  if (end <= 0) return -1;
  let sorted = move.sort((a, b) => a - b)
  for (let idx in sorted) {
    if (sorted[idx] > restArr[restArr.length - 1]) {
      let tmp = restArr[restArr.length - 1]
      restArr[restArr.length - 1] = sorted[idx]
      sorted[idx] = tmp;
      break;
    }
  }
  return Number([...restArr, ...sorted].join(''))
}


console.log(nextBigger(21994)) // 24199)
console.log(nextBigger(6370910)) //,531)
console.log(nextBigger(2017)) //,2071)
console.log(nextBigger(7005401)) //,441)
console.log(nextBigger(144)) //,414)