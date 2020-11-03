// function tailAndHead(arr) {
//   return arr
//     .reduce((acum, curr, index) => {
//       let number =  parseInt(String(arr[index + 1])[0] * String(curr)[String(curr)])
//       console.log(number)
//       acum *= number
//       return acum
//     }, 1)
// }


// console.log(tailAndHead([123,456,789,12,34,56,78]) ) //, 532350);
// console.log(tailAndHead([1, 2, 3, 4, 5])); // , 945);
// console.log(tailAndHead([111,2345,66,78,900])) // , 7293);
// console.log(tailAndHead([35456,782,569,2454,875])) //) , 12012

//[123,456,789,1 2,3 4,5 6,78]
//3+4 6+7 9+1 2+3 4+5 6+7  

// let arr = [1,2,3,4,5]

// function getSum(arr){
//   let result = []
//   arr.reduce((a,b) => {
//     a = a + b
//     result.push(a)
//     return a
//   },0)
//   return result;
// }

// console.log(getSum(arr))

// function accum(s) {
// 	return s.split('').reduce((acum,curr,index) => {
//     return acum += curr.toUpperCase() + curr.toLowerCase().repeat(index) + "-"
//   },'').slice(0,-1)
// }

// function accum(s) {
//   let result = ''
//   for(let i = 0; i < s.length ; i ++ ){
//     result = result + s[i].toUpperCase() + (s[i].toLowerCase() * i)
//     if(i !== s.length -1){
//       result += "-"
//     }
//   }
//   return result
// }

// console.log(accum("abcd")) // -> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")) // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")) // -> "C-Ww-Aaa-Tttt"
function is_isogram(string){
  let letters = string.toLowerCase().split('').map(item => {
    return string.indexOf(item)
  })
  let correct = new Array(...new Set(letters)).length
  return letters.length == correct;
}


console.log(is_isogram("Dermatoglyphics")) //, True )
console.log(is_isogram("isogram")) //, True )
console.log(is_isogram("aba")) //, False, "same chars may not be adjacent" )
console.log(is_isogram("moOse")) //, False, "same chars may not be same case" )
console.log(is_isogram("isIsogram")) //, False )
console.log(is_isogram("")) //, True, "an empty string is a valid isogram" )