function scramble(str1,str2){
  function strToDic(str){
    const dic = {}
    for(letter of str){
      dic[letter] ? dic[letter]++ : dic[letter] = 1;
    }
    return dic;
  }
  const dic1 = strToDic(str1);
  const dic2 = strToDic(str2);
  for(const [key, value] of Object.entries(dic2)){
    if(!dic1[key] || dic1[key] < value){
      return false
    }
  }
  return true
}


console.log(scramble('rkqodlw','world')) //,true);
console.log(scramble('cedewaraaossoqqyt','codewars')) //,true);
console.log(scramble('katas','steak')) //,false);
console.log(scramble('scriptjava','javascript')) //,true);
console.log(scramble('scriptingjava','javascript')) //,true);
console.log(scramble('scriptsjava','javascripts')) //,true);
console.log(scramble('jscripts','javascript')) //,false);
console.log(scramble('aabbcamaomsccdd','commas')) //,true);