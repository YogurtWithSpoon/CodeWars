function waveSort(arr){
  let check = true;
  arr.sort((a,b) => {
    if(check){
      return a - b
    } else {
      return b - a
    }
    check = !check;
  })
}

//>= <=
console.log(waveSort([4, 1, 7, 5, 6, 2, 3]))