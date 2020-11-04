// function persistence(num) {
//   let i = 0;
//   while(String(num).length != 1){
//     num = String(num).split('').reduce((prev,curr) => {
//       return prev * curr
//     },1)
//     i++;
//   }
//   return i;
// }

function persistence(num,counter = 0){
  function power(number){
    return String(number).split('').reduce((prev,curr)=> {
      return prev * curr;
    })
  }

  if(String(num).length == 1){
    return counter;
  }

  return (persistence(power(num),++counter))
}

console.log(persistence(39)) // ,3);
console.log(persistence(4)) // ,0);
console.log(persistence(25)) // ,2);
console.log(persistence(999)) // ,4);