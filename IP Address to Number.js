function ipToNum(string){
    let binary = string.split('.').map(item => {
        let num = +item;
        let double = num.toString(2)
        return double.length == 8 ? double : "0".repeat(8-double.length)+double;
    })
    let merged = binary.join('')
    return parseInt(merged,2)
}

function numToIp(number){
    function splitToChunk(array,length){
        const chunke = [];
        let index = array.length;
        while (index > 0) {
          chunke.push(array.slice(Math.max(index - length,0),index));
          index -= length;
        }
        return chunke;
    }
    let double = number.toString(2)
    let splited = splitToChunk(double,8)
    return splited.map(item => parseInt(item,2)).reverse().join('.')
}

//ipToNum

console.log(ipToNum('10.0.0.0')) //, 167772160);
console.log(numToIp(167772160)) //, '10.0.0.0');
