
const obj = {
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
};
const obj1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};
const obj2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
};
const obj3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};

const removeDuplicateIds = (obj) => {
  let dic = {}
  return Object.entries(obj).reverse().reduce((prev,[key,value]) => {
    let tmp = []
    for(let item of value){
      if(!dic[item]){
        dic[item] = 1;
        tmp.push(item)
      } else {
        dic[item]++;
      }
    }
    prev[key] = tmp
    return prev
  },{})
};

const result = removeDuplicateIds(obj);
const result1 = removeDuplicateIds(obj1);
const result2 = removeDuplicateIds(obj2);
const result3 = removeDuplicateIds(obj3);
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)


/*
{ "1": ["C"], "2": ["A", "B", "D"] });
 { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });
{ "1": [], "2": [], "3": ["A"] });
      "11": ["P", "R", "S"],
      "53": ["C"],
      "236": ["L", "X", "G", "H"],
      "432": ["A", "B", "D"],
});
*/