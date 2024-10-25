import _ from "underscore";

var list = [1, 2, 3, 4, 5, 6];
// _.each([1, 2, 3, 4, 5], (val, idx, list) => console.log(val, idx, list));

// const result1 = [1, 2, 3].forEach((val, idx, list) =>
//   console.log(val, idx, list)
// );

// console.log({ result1 });
// const result2 = _.each({ a: 1, b: 2 }, (val, key, list) =>
//   console.log(val, key, list)
// );
// console.log({ result2 });

var result = _.reject(list, (num) => num % 2 === 0);
console.log(result);
var result = _.contains(list, 3);
console.log(result);
var result = _.isArray(list);
console.log(result);
