function calcFuel(ingots) {
    const materials = {
        lava: 800,
        blazeRod: 120,
        coal: 80,
        wood: 15,
        stick: 1
    }

    let fullTime = ingots * 11;

    let result = {
        lava: 0,
        blazeRod: 0,
        coal: 0,
        wood: 0,
        stick: 0
    }

    for (let [name, value] of Object.entries(materials)) {
        while (fullTime >= value) {
            fullTime -= value;
            result[name]++;
        }
    }

    return result;
}



console.log(calcFuel(37)) //, { lava: 0, blazeRod: 3, coal: 0, wood: 3, stick: 2 });
console.log(calcFuel(21)) //, { lava: 0, blazeRod: 1, coal: 1, wood: 2, stick: 1 });
console.log(calcFuel(123)) //, { lava: 1, blazeRod: 4, coal: 0, wood 4 stick 13