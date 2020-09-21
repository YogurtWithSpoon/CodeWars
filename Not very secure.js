function alphanumeric(string){
    let check =  string.match(/[a-zA-Z\d]/gm) ? string.match(/[a-zA-Z\d]/gm).length : false
    return check === string.length && string.length >= 1 ? true : false
}


//we learn that regexp have a test method



console.log(alphanumeric("Mazinkaiser"))
console.log(alphanumeric("G")) //, true)
console.log(alphanumeric("hello world_")) //, false)
console.log(alphanumeric("PassW0rd")) //, true)
console.log(alphanumeric("     "))
console.log(alphanumeric("ciao$$_")) //, false)