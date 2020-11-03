function digital_root(number){
  number = String(number).split('').reduce((prev,cur) => {
    return Number(prev) + Number(cur)
  })
  return number.length == 1 ? Number(number) : digital_root(number)
}




console.log( digital_root(16)) //, 7 )
console.log( digital_root(456) )//, 6 )

