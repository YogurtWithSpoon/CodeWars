function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let allSavings = startPriceOld;
  let monthCount = 0;
  let twoMonthsCount = 1;
  let savingAmount = savingperMonth;

  while(allSavings < startPriceNew){
    if(twoMonthsCount >= 2){
      twoMonthsCount = 0;
      percentLossByMonth+=0.5
    }
    startPriceOld = startPriceOld * (100 - percentLossByMonth)/100
    startPriceNew = startPriceNew * (100 - percentLossByMonth)/100
    allSavings = startPriceOld + savingAmount;    
    savingAmount+=savingperMonth;
    monthCount++;
    twoMonthsCount++;
  }
  return [monthCount, Math.round(allSavings - startPriceNew)]
}



console.log(nbMonths(18000,32000,1500,1.25))
//console.log(nbMonths(2000, 8000, 1000, 1.5))  //, [6, 766])
//console.log(nbMonths(12000, 8000, 1000, 1.5)) // ,[0, 4000])


// buy car 
// old car 2000
// new car 8000
// each month 1000 save 
