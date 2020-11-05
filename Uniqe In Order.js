function uniqueInOrder(iterable){
  iterable = typeof iterable == 'string' ? iterable.split('') : iterable
  return iterable.reduce((prev,curr) => {
    if(prev[prev.length-1] != curr){
      prev.push(curr)
    }
    return prev
  },[])
}

function uniqueInOrder2(iterable){
  return [...iterable].filter((item,index) => item !== iterable[index-1])
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder2('AAAABBBCCDAABBB'))