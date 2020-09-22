///// tryin but not work properly
// function ipsBetween(startIP, endIP) {
//     let startSep = startIP.split('.').reverse()
//     let endSep = endIP.split('.').reverse()
//     let between = endSep.map((item, index) => {
//         return item - startSep[index]
//     })
//     let balance = between.map((item,index) => {
//         if(item < 0){
//             between[index+1]--;
//             return item+= 256;
//         } 
//         return item
//     })
//     let sum = 0;
//     console.log(balance)
//     balance.map((item,index) => {

//         if(item !== 0){
//             if(index == 0){
//                 sum += item;
//             } else if(index == 3){
//                 sum ** index 
//             } else {
//                 sum += (257-item)**index
//             }
//         }
//     })
//     return sum;
// }

function ipsBetween(start,end){
    function ipToNum(string){
        let binary = string.split('.').map(item => {
            let num = +item;
            let double = num.toString(2)
            return double.length == 8 ? double : "0".repeat(8-double.length)+double;
        })
        let merged = binary.join('')
        return parseInt(merged,2)
    }
    let begin = ipToNum(start);
    let over = ipToNum(end);
    return over - begin;
}

console.log(ipsBetween('0.0.0.0', '4.4.4.4')) //65793);
console.log(ipsBetween("1.2.3.4","5.6.7.8")) // 67372036