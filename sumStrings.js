function sumStrings(a,b) { 
  if(a.length > b.length){
    a = a.split('')
    b = b.padStart(a.length,0).split('')
  } else {
    a = a.padStart(b.length, 0).split('')
    b = b.split('')
  }
  let add = 0;
  let result = []
  for(let i = a.length - 1; i >= 0; i--){
    let sum = add > 0 ? Number(a[i]) + Number(b[i]) + 1 : Number(a[i]) + Number(b[i]);
    if(i === 0){
      result.push(sum)
      break;
    }
    if(add > 0) add--;
    if(sum > 9){
      let strSum = String(sum).split('');
      add++;
      result.push(Number(strSum[1]))
    } else {
      result.push(sum);
    }
  }
  let i = 0;
  result = result.reverse()
  while(true){
    if(result[i] === 0){
      result.shift()
    } else {
      break;
    }
  }
  return result.join('')
}


console.log(sumStrings('8797', '45')); //8842
'712577413488402631964821329'
'712577413488402631964821329'

'     8100824045303269669937'
'712569312664357328695151392'