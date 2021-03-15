function add(n){
  let sum = n;

  function plus(a){
    sum+=a
    return plus
  }

  plus.toString = function(){
    return sum
  }

  return plus
}


console.log(add(1)) // == 1);
console.log(add(1)(2)) // == 3);
console.log(add(1)(2)(3)) // == 6);
