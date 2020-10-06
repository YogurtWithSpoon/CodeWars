function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'');
}

//[a,e,i,o,u,y]
console.log(disemvowel("This website is for losers LOL!"))//,"Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,Your writing is among the worst I've ever read)"))