function toUnderscore(string){
    let split = String(string).replace(/(?=[A-Z])/g,'_')
    return split.toLowerCase().slice(1,) == 0 ? String(string) : split.toLowerCase().slice(1,)
}



//  returns test_controller
console.log(toUnderscore('TestController'));

// returns movies_and_books
console.log(toUnderscore('MoviesAndBooks'));

// returns app7_test
console.log(toUnderscore('App7Test'));

// returns "1"
console.log(toUnderscore(1));