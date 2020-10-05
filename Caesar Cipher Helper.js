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
    return (code + this.shift > 90)
  }

  fromStartToEnd(code) {
    return String.fromCharCode(90 - (65 - (code - this.shift) - 1));
  }

  fromEndToStart(code){
    return String.fromCharCode(65 + (code + this.shift) - 90 - 1)
  }

  shiftLetter(code,direction){
    return direction == "forward" ? String.fromCharCode(code + this.shift) : String.fromCharCode(code - this.shift)
  }

  decode(string) {
    const array = string.toUpperCase().split("").map((item) => {
        let code = item.charCodeAt();
        if (this.isSymbol(code)) {
          if (this.isBelow(code)) {
            return this.fromStartToEnd(code);
          }
          return this.shiftLetter(code,'backward')
        }
        return item;
      });
    return array.join("");
  }

  encode(string) {
    const array = string.toUpperCase().split("").map((item) => {
        let code = item.charCodeAt();
        if (this.isSymbol(code)) {
          if (this.isOver(code)) {
            return this.fromEndToStart(code)
          }
          return this.shiftLetter(code,'forward')
        }
        return item;
      });
    return array.join("");
  }
}

let password = new CaesarCipher(5);
console.log(password.decode("9E1Y"));
console.log(password.encode("9Z1T"));
