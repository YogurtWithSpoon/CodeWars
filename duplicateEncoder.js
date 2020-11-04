function duplicateEncode(string){
  let dic = {}
  for(let letter of string.toLowerCase()){
    dic[letter] ? dic[letter]++ : dic[letter] = 1;
  }

  let result = ''

  for(let letter of string.toLowerCase()){
    dic[letter] > 1 ? result += ")" : result += "("
  }

  return result;
}



console.log(duplicateEncode("din")) //,"(((");
console.log(duplicateEncode("recede")) //,"()()()");
console.log(duplicateEncode("Success")) //,")())())","should ignore case");
console.log(duplicateEncode("(( @")) //,"))((");