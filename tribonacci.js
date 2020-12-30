function tribonacci(signature,n){
  if(signature.length > n){
    return signature.splice(0,n)
  }
  if(signature.length == n){
    return signature
  }
  signature.push(signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3])
  return tribonacci(signature,n)
}


console.log(tribonacci([1,1,1],10))
console.log(tribonacci([0,0,1],10))
console.log(tribonacci([0,0,0],10))
console.log(tribonacci([1,2,3],10))
console.log(tribonacci([1,1,1],1))
console.log(tribonacci([300,200,100],0))
