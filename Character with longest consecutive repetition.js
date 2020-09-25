function longestRepetition(string) {
    let strArray = string.split('')
    let result = []
    let calculate = [strArray[0], 1]
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] == strArray[i + 1]) {
            calculate[0] = strArray[i]
            calculate[1]++;
        } else {
            result.push(calculate)
            calculate = ['', 1]
        }
    }
    
    let max = ['',0];

    for(item of result){
        if(item[1] > max[1]){
            max[0] = item[0];
            max[1] = item[1]
        }
    }
    return max
}



//console.log(longestRepetition("yqjq6qjda52cprv1lpq8ervumg4guff7o6gtqbhhzlljdpdo2dwyjwlygo78bzpksrtb2s85pj82uk91fkufilb2lpr9mzuq9mkhbs2y46jvnfspwlvhh9x07449nngxl7l12x7d5ch7a75jkee12vpd8mo5yejevnv73xci22opeipqcgwgu9z2iz9s4e6wsgnqa2m2zhvnun64qyk9aagfi81aa5aurmno5f2fusuwsb9j2202xjnxoyum2d82l1vvhfheeqjw40iu9r674fmc1zqb6mqd4y4v8hwvfdd7lrzu6lxj5s3oxb143ah4zgpsburx6uugqdmagwbyl456w6up6rymz1nt76rxkizhtymid98larr4eymcy0vpo02ljlhuee8cjwa5ziehzywgva2jc0e23a20ad2cvb8h1erlidw0trcvgcam7b6bk4ubcubrsfxdlia396zisdj1dpdmufh55iyrpe1ocppdmqr4fioj")) //,      ["a",4] );
console.log(longestRepetition("bbbaaabaaaa")) //, ["a",4] );
console.log(longestRepetition("cbdeuuu900")) //,  ["u",3] );
console.log(longestRepetition("abbbbb")) //,      ["b",5] );
console.log(longestRepetition("aabb")) //,        ["a",2] );
console.log(longestRepetition("")) //,            ["",0] );
console.log(longestRepetition("ba")) //,          ["b",1] );