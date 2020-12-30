function n(digit){
  return function(op){
    return op ? op(digit) : digit;
  }
}

let one = n(1)
let two = n(2)

function plus(r){
  return function(l){
    return l + r
  }
}

one(plus(two()))