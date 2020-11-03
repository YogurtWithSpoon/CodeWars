function wordToDic(word){
  let dic = {}
  for(letter of word){
      dic[letter] ? dic[letter]++ : dic[letter] = 1;
  }
  return dic
}

function isEqual (object1,object2) {
  for(items in object1){
    if(object1[items] !== object2[items]){
      return false;
    }
  }
  return true;
}


function anagrams(word,array){
  let resultArray = [];
  let checkWord = wordToDic(word);
  for(item of array){
    if(item.length == word.length){
      isEqual(checkWord,wordToDic(item)) ? resultArray.push(item) : null;
    }
  }
  return resultArray
}







console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // => []