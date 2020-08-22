function solve(array){    
    array = Array.from(new Set(array));
    if(array.length == 1){
        return "23:59"
    }
    let sorted = array.sort((a,b) => b.split(":")[0] - a.split(':')[0] || b.split(':')[1] - a.split(':')[1])
    let time = []
    for(let i=0;i<sorted.length-1;i++){
        let [hours,min] = sorted[i].split(':')
        let [hours2,min2] = sorted[i+1].split(':')
        let difHours = Number(hours) - Number(hours2)
        let difMin = min - min2 - 1
        if(difMin < 0){
            difMin = min - min2 + 59;
            difHours--
        }
        let digMin = difMin < 10 ? "0" + difMin : difMin
        let digHours = difHours < 10 ? "0" + difHours : difHours
        time.push(`${digHours}:${digMin}`)
    }
    let [startHour,startMin] = sorted[0].split(":")
    let [lastHour,lastMin] = sorted[sorted.length-1].split(":")
    let difHours = 0;
    startHour = Number(startHour);
    lastHour = Number(lastHour);
    while(startHour !== lastHour){
        startHour++;
        if(startHour==24){
            startHour = 0;
        }
        difHours++
    }

    let difMin = lastMin - startMin - 1
    if(difMin < 0){
        difMin = 59 - lastMin - startMin
        difHours--
    }
    
    time.push(`${difHours < 10 ? "0" + difHours : difHours}:${difMin < 10 ? "0" + difMin : difMin}`)
    let result = time.sort()[time.length-1]
    return result
}


console.log(solve(["21:14", "15:34", "14:51", "06:25", "15:30"])) //, "09:10");
console.log(solve(["23:00","04:22","18:05","06:24"]))