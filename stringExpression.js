function solve(string){
    let rowString = string.replace(/[()]/g,"").split('').reverse()
    let acum = ''

    for(item of rowString){
        isNaN(Number(item)) ? acum+= item : acum = acum.repeat(item)
    }
    return acum.split('').reverse().join('')
}


console.log(solve("3(ab)")) //,"ababab");
console.log(solve("2(a3(b))")) //,"abbbabbb");
console.log(solve("3(b(2(c)))")) //,"bccbccbcc");
console.log(solve("k(a3(b(a2(c))))")) //,"kabaccbaccbacc");