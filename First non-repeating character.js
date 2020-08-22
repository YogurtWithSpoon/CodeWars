function firstNonRepeatingLetter(string){
    let dic = {}
    for(letter of string.toLowerCase()){
        dic[letter] ? dic[letter]++ : dic[letter] = 1
    }
    if(dic == 0){
        return ''
    }
    for(keys in dic){
        if(dic[keys] == 1){
            return string.indexOf(keys) !== -1 ? keys : keys.toUpperCase()
        } 
    }
    return ''
}


console.log(firstNonRepeatingLetter('aa')) //, 'a');
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")) //, 't');
console.log(firstNonRepeatingLetter('sTreSS')) //, 'e');