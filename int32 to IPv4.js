function int32ToIp(number) {
    let double = number.toString(2)
    let doubleSplited = [0, 8, 16, 24]
    return doubleSplited.map((item, index) => {
        return parseInt(double.slice(item, doubleSplited[index + 1]), 2) || 0
    }).join('.')
}


console.log(int32ToIp(2154959208)) //, "128.114.17.104", "wrong ip for interger: 2154959208") 
console.log(int32ToIp(0)) //, "0.0.0.0", "wrong ip for integer: 0")
console.log(int32ToIp(2149583361)) //, "128.32.10.1", "wrong ip for integer: 2149583361")