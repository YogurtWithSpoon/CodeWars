// function sumOfN(n) {
// let array = [0]
// let sum = 0;
// let add = n > 0 ? 1 : -1;
// let counter = 0;
// while(counter != n){
//   counter += add;
//   sum = sum + counter;
//   array.push(sum)
// }
// return array
// };

function sumOfN(n) {
  let array = new Array().fill(n)
  return array
};

console.log(sumOfN(3)) //, [0, 1, 3, 6]); 
console.log(sumOfN(-4)) //, [0, -1, -3, -6, -10]);  
console.log(sumOfN(1)) //, [0, 1]);    
console.log(sumOfN(-6)) //, [0, -1, -3, -6, -10, -15, -21]);


