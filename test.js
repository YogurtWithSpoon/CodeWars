// function plus(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + plus(n - 1);
// }

// console.log(plus(8));

// function plusAnother(n) {
//   let sum = 0;
//   for (let i = n; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(plusAnother(8));

// arraygen = (min, max, step) => {
//   let array = [];
//   for (let i = min; i <= max; i += step) {
//     array.push(i);
//   }
//   return array;
// };

// console.log(arraygen(2, 10, 2));

// function fill(size, value) {
//   return new Array(size).fill(value);
// }

// console.log(fill(3, "a"));

// const compact = (array) => {
//   return array.filter((item) => item);
// };

// console.log(compact([0, 1, false, 2, undefined, "", 3, null])); // [1, 2, 3];

// const fromPairs = (array) => {
//   let result = {};
//   array.map((item) => {
//     result[item[0]] = item[1];
//   });
//   return result;
// };

// console.log(
//   fromPairs([
//     ["a", 1],
//     ["b", 2],
//   ])
// );

// const without = (array, ...args) => {
//   return array.map(item => {
//     return args.indexOf(item) == -1 ? item : null
//   }).filter(a => a)
// };

// console.log(without([1, 2, 3, 1, 2], 1, 2)); // [3]

// const unique = (array) => {
//   return Array.from(new Set(array))
// }
// console.log(unique([1, 2, 1, 2, 3])); // [1, 2, 3]

// const isEqual = (firstArray, secondArray) => {
//   return firstArray.concat(secondArray)
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];
// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false
