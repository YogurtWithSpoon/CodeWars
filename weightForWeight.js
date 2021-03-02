function orderWeight(strng) {
  let array  = strng.split(' ')
  return array.sort((a,b) => {
    let first = a.split('').reduce((prev,curr) => Number(prev) + Number(curr))
    let second = b.split('').reduce((prev,curr) => Number(prev) + Number(curr))

    return first - second || a > b || - (a < b)
  }).join(' ')
}




console.log(orderWeight('111 7 142 17 144 36 127 37 147 149 68 53064 104852 46155 429810 481335 352936 359714 435956 478447 389648')) 
//'111 142 7 17 144 36 127 37 147 149 68 53064 104852 46155 429810 481335 352936 359714 435956 478447 389648'
