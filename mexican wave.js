function wave(str){
    let countLetters = str.length
    let i = 0;
    let blank = []
    while(i < countLetters){
        blank.push(str);
        i++;
    }
    let index = 0;

    let finish = blank.map(item => {
        if(item[index] !== ' '){
            let result = item.slice(0,index) + item[index].toUpperCase() + item.slice(index+1)
            index++;
            return result;
        } else {
            index++;
        }
    })
    return finish.filter(a => a)
}



console.log(wave('hello'))
console.log(wave('hello world'))