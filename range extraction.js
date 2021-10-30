function solution(list){
  let result = []
  let start = list[0];
  let count = 0;
  let tmp = []
  for(let i = 1; i <= list.length ; i++){
    if(start + 1 === list[i]){
      tmp.push(start, list[i]) 
      count++;
    } else {
      if(count >= 2){
        const first = tmp.shift();
        const last  = tmp.pop()
        result.push(first + '-' + last)
      } else {
        tmp.length > 0 ? tmp.forEach(item => result.push(item)) : result.push(start)
      }
      tmp = []
      count = 0;
    }
    start = list[i]
  }
  return result.join(',')
}







console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) 
//, "-6,-3-1,3-5,7-11,14,15,17-20"