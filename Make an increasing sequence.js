function increasingSequence(array){
  const unique = [...new Set(array)];
  let results = {}
  for(let i = 0; i < unique.length; i++){
    let max = unique[i]
    const result = [max]
    for(item of [...unique].splice(i)){
      if(item > max){
        result.push(item);
        max = item;
      }
    }
    results[i] = result;
  }
  return results
}

console.log(Array(5).forEach(() => {
document.querySelectorAll('.listing-item')[Math.floor(Math.random()*document.querySelectorAll('.listing-item').length+1)].textContent
}))



console.log(increasingSequence([1, 1, 1, 2])) //, [1, 2]) 
console.log(increasingSequence([186,186,150,200,160,130,197,220])) // , [150,160,197,220]) 
console.log(increasingSequence([1,2,3,4,5])) //, [1,2,3,4,5]) 
console.log(increasingSequence([5,4,3,2,1])) //, [5]) 
console.log(increasingSequence([1,100,2,3,100,4,5])) //, [1,2,3,4,5]) 
console.log(increasingSequence([1,100,2,3,4,100,5])) //, [1,2,3,4,100])
console.log(increasingSequence([100,1,2,3,100,4,5])) //, [1,2,3,4,5]) 
//console.log(increasingSequence([452,603,925,825,689,656,538,586,293,440,622,52,842,925,287,221,351,954,89,220,943,438,607,431,118,644,66,629,776,249] )) //,[452, 538, 586, 622, 842, 925, 954])