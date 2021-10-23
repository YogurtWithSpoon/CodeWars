const snail = function(array) {
  if(array.length === 1){
    return array[0]
  }
  let max = array.length
  let arrayRow = Array(max).fill('').map((_,index) => index)
  let ic = []
  let jc = []
  while(arrayRow.length > 1){
    const copy = arrayRow.slice(0,-1)
    copy.forEach(() => ic.push(copy[0]))
    copy.forEach(item => {jc.push(item); ic.push(item)})
    const copyReverse = arrayRow.concat().reverse().slice(0,-1)
    copyReverse.forEach(() => {jc.push(copyReverse[0]); ic.push(copyReverse[0])})
    copyReverse.forEach(item => {jc.push(item); ic.push(item)})
    copy.forEach(() => jc.push(copy[0]))
    arrayRow = arrayRow.slice(1,-1)
  }
  if(array.length % 2 !== 0){
    ic.push(Math.floor(array.length / 2))
    jc.push(Math.floor(array.length / 2))
  }
  return ic.map((item,index) => array[item][jc[index]])
}
console.log(snail([[1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
