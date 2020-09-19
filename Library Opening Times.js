function openingTimes(string){
  let [day,time] = string.split(' ')
  let currentDay = day.toLowerCase();
  let [hours,minutes] = time.split(':');

  const timeTable = {
    "monday" : ["480", "1200"],
    "tuesday" : ["480", "1200"],
    "wednesday" : ["480", "1200"],
    "thursday" : ["480", "1200"],
    "friday" : ["480", "1200"],
    "saturday": ["600", "1080"],
    "sunday" : ["720", "990"],
  }

  isCorrectTime = (hours,minutes) => {
    return hours < 24 && minutes < 60;
  }

  isCorrectDay = (day) => {
    return Boolean(timeTable[day])
  }

  convertTime = (time) => {
    return Number(time.split(':')[0])*60 + Number(time.split(':')[1])
  }

  convertMinute = (min) => {
    let hours = Math.floor(min/60)
    let minutes = (min - hours * 60) > 10 ? (min - hours * 60) : "0" + (min - hours * 60)
    return hours+":"+minutes
  }

  logic = (day,time) => {
    let currentTable = timeTable[day];

    let indexNextDay = Object.keys(timeTable).indexOf(currentDay) >= 6 ? 0 : Object.keys(timeTable).indexOf(currentDay)+1
    let nextDay = Object.keys(timeTable)[indexNextDay]
    let [tableMinOpen,tableMinClose] = currentTable;

    let currentTime = convertTime(time);
    if(currentTime > tableMinOpen && currentTime < tableMinClose){
      return `Library closes at ${convertMinute(tableMinClose)}`
    }
  }

  if(isCorrectDay(currentDay) && isCorrectTime(hours,minutes)){
    return logic(currentDay,time)
  } else {
    return "Invalid time!"
  }
}


console.log(openingTimes("Sunday 12:15"))
console.log(openingTimes("Monday 07:59"))
console.log(openingTimes("Friday 20:34"))

console.log(openingTimes("Monday 09:30")) //, "Library closes at 20:00"); 
console.log(openingTimes("Saturday 00:00")) //, "Library opens: today 10:00");
console.log(openingTimes("Tuesday 20:00")) //, "Library opens: Wednesday 08:00");
console.log(openingTimes("MoNDay 07:59")) //, "Library opens: today 08:00");
console.log(openingTimes("Tuesday 13:61")) //, "Invalid time!");
console.log(openingTimes("wednsay 12:40")) //, "Invalid time!");
