function productFib(prod){
  let check = 0;
  let index = 0;

  function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  while(check < prod){
    check = fib(index) * fib(index + 1);
    if(check == prod){
      return [fib(index),fib(index+1),true]
    }
    index++;
  }
  return [fib(index-1),fib(index),false]
}




console.log(productFib(4895)) //, [55, 89, true])
console.log(productFib(5895)) //, [89, 144, false])
console.log(productFib(74049690)) //, [6765, 10946, true])
console.log(productFib(84049690)) //, [10946, 17711, false])
console.log(productFib(193864606)) //, [10946, 17711, true])
console.log(productFib(447577)) //, [610, 987, false])
console.log(productFib(602070)) //, [610, 987, true])) //