function checkComments(input, markers) {
  let result = input.split('\n');
  let finish = result.map(item => {
    let start = 0;
    for(let i = 0; i < item.length; i++){
      if(markers.includes(item[i])){
        start = i - 1;
      }
    }
    if(start  === 0){
      start = item.length;
    }
    return item.slice(0, start).trim()
  })
  return finish.join('\n')
};


console.log(checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
 "apples, plums\npears\noranges"
console.log(checkComments("Q @b\nu\ne -e f g", ["@", "-"])); 
//"Q\nu\ne"
console.log(checkComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
//"apples, pears\ngrapes\nbananas"