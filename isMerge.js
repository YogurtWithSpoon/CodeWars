function isMerge1(s, part1="", part2="") {
  const arrayS = s.split('')
  const arrayPart1 = part1.split('') || []
  const arrayPart2 = part2.split('') || []
  for(const letter of arrayS){
      if(arrayPart1[0] === letter && arrayPart2[0] === letter){
        arrayPart1.length > arrayPart2.length ? arrayPart1.shift() : arrayPart2.shift()
        continue
      } 
      if(arrayPart1[0] === letter){
        arrayPart1.shift()
      } else if (arrayPart2[0] === letter){
        arrayPart2.shift()
      } else {
        return false
      }
  }
  return arrayPart1.length === 0 && arrayPart2.length === 0 
}

function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

console.log(isMerge('Bananas from Bahamas', 'code', 'wars'));
console.log(isMerge('codewars', 'cdw', 'oears'));
console.log(!isMerge('codewars', 'cod', 'wars'));

