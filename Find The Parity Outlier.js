function findOutlier(array){
  return array.filter(item => item % 2 == 0).length == 1 ? array.filter(item => item % 2 == 0)[0] : array.filter(item => item % 2 !== 0)[0]
}


console.log(findOutlier([0, 1, 2])) //, 1)
console.log(findOutlier([1, 2, 3])) //, 2)
console.log(findOutlier([2,6,8,10,3])) //, 3)
console.log(findOutlier([0,0,3,0,0])) //, 3)
console.log(findOutlier([1,1,0,1,1])) //, 0)