function solution(string){
  let odd = string.length % 2 !== 0
  let result = [];
  let temp = ''
  string.split('').forEach((item,index) => {
    temp+=item
    if(temp.length === 2){
      result.push(temp)
      temp = '';
    }
    if(odd && index === string.length-1){
      result.push(`${item}_`)
    }
  })
  return result
}




console.log(solution("abcdef")) //, ["ab", "cd", "ef"]);
console.log(solution("abcdefg")) //, ["ab", "cd", "ef", "g_"]);
console.log(solution("")) //, []);