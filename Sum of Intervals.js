function sumIntervals(intervals){
    const object1 = {}
    for(let interval of intervals){
        let i = interval[0];
        while(i < interval[1]){
            object1[i] = 1;
            i++;
        }
    }
    return Object.values(object1).reduce((prev,curr) => prev+=curr)
}



// without overlapping intervals
let test1 = [[1,5]];
let test2 = [[ 418, 453 ], [ -184, -97 ], [ 124, 395 ], [ -474, -450 ]];
console.log(sumIntervals(test1))// 4);
console.log(sumIntervals(test2)) // 8);
//overlapping intervals
let test3 = [[1,5],[1,5]];
let test4 = [[1,4],[7, 10],[3, 5]];
console.log(sumIntervals(test3)) //, 4);
console.log(sumIntervals(test4)) //, 7);
