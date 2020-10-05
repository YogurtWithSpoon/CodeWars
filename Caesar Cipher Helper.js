class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  isSymbol(code) {
    return code >= 65 && code <= 90;
  }

  isBelow(code) {
    return code - this.shift < 65 && code < 90;
  }
  
  isOver(code){
    return code + this.shift > 90
  }

  fromStartToEnd(code) {
    return String.fromCharCode(90 - (65 - (code - this.shift) - 1));
  }

  fromEndToStart(code){
    return String.fromCharCode(65 + (code + this.shift) - 90 - 1)
  }

  shiftLetter(code){
    String.fromCharCode(code - this.shift);
  }

  decode(string) {
    const array = string.toUpperCase().split("").map((item) => {
        let code = item.charCodeAt();
        if (this.isSymbol(code)) {
          if (this.isOver) {
            return this.fromStartToEnd(code);
          }
          return this.shiftLetter(code)
        }
        return item;
      });
    return array.join("");
  }

  encode(string) {
    const array = string
      .toUpperCase()
      .split("")
      .map((item) => {
        let code = item.charCodeAt();
        if (this.isSymbol(code)) {
          if (code + this.shift > 90) {
            return this.fromEndToStart(code)
          }
          return this.shiftLetter
        }
        return item;
      });
    return array.join("");
  }
}

let password = new CaesarCipher(5);
console.log(password.decode("BFKKQJX"));
console.log(password.encode("Codewars"));
