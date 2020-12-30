// function solve(a,b){
//   return b.map(item => {
//     let sum = 0;
//     for(item2 of a){
//       item2 == item ? sum++ : null
//     }
//     return sum
//   })
// }

function solve(a,b){
  return b.map(item => a.filter(item2 => item2 === item).length)
}


console.log(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap'])) //, [2, 1, 0]);
console.log(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz'])) //, [2, 1, 2]);
console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])) //, [2, 0, 1]);