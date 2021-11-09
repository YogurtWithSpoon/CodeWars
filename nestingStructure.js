Array.prototype.sameStructureAs = function (other) {
  if(!Array.isArray(other)) return false
  function copyToString(arr,start) {
    let string = start
    arr.forEach((item, index) => {
      if(Array.isArray(item)){
        string+=copyToString(item, '[')
      } else {
        string += 0 + (index === arr.length - 1 ? '' : ',')
      }
    });
    return string + ']'
  }
  const one = copyToString(this, '[')
  const two = copyToString(other, '[')
  return one === two
};

// should return true
console.log([1, 1, 1].sameStructureAs([2, 2, 2])) //true;          
console.log([1, [1, 1]].sameStructureAs([2, [2, 2 ]])) //true;  

// should return false 
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));
console.log([1, [1, 1]].sameStructureAs([[2], 2]));

// should return true
console.log([[[], []]].sameStructureAs([[[], []]]));

// should return false
console.log([[[], []]].sameStructureAs([[1, 1]]));