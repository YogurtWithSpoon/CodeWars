function whatCentury(year){
    let endsLetters = {
        1: "st",
        2: "nd",
        3: "rd",
        "other": 'th'
    }
    let century = year % 1000 == 0 ? Number(year.slice(0,2)) : Number(year.slice(0,2)) + 1
    let endsDigit = endsLetters[String(century)[1]] || endsLetters["other"]
    century < 20 ? endsDigit = 'th' : null
    return century + endsDigit
}


console.log(whatCentury("1999")) //, "20th", "With input '1999' solution produced wrong output");
console.log(whatCentury("2011")) //, "21st", "With input '2011' solution produced wrong output");
console.log(whatCentury("2154")) //, "22nd", "With input '2154' solution produced wrong output");
console.log(whatCentury("2259")) //, "23rd", "With input '2259' solution produced wrong output");
console.log(whatCentury("1234")) //, "13th", "With input '1234' solution produced wrong output");
console.log(whatCentury("1023")) //, "11th", "With input '1023' solution produced wrong output");
console.log(whatCentury("2000")) //, "20th",