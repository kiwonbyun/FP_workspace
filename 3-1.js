import _ from "underscore";

var log = console.log;
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

// var result = _.reject(list, (num) => num % 2 === 0);
// console.log(result);
// var result = _.contains(list, 3);
// console.log(result);
// var result = _.isArray(list);
// console.log(result);

var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

// log(_.pluck(users, "name"));
// log(_.first([1, 2, 3, 4]));
// log(_.first([1, 2, 3, 4], 1));
// log(_.first([1, 2, 3, 4], 2));
// log(_.last([1, 2, 3, 4, 5]));
// log(_.last([1, 2, 3, 4, 5], 1));
// log(_.last([1, 2, 3, 4, 5], 2));

// log(_.rest([1, 2, 3, 4, 5]));
// log(_.rest([1, 2, 3, 4, 5], 2));
// log(_.initial([1, 2, 3, 4, 5]));
// log(_.initial([1, 2, 3, 4, 5], 2));

// log(_.lastIndexOf([1, 2, 3, 4, 5, 6], 2));
// log(_.lastIndexOf([1, 6, 3, 4, 5, 6], 6));
// log(_.flatten([1, 2, 3, [4, 5, [6]]]));

// log(_.values(users[0]));
// log(_.keys(users[0]));
// log(_.extend({ id: 1, name: "ID", age: 32 }, { age: 36, job: "developer" }));
// log(_.pick({ id: 1, name: "ID", age: 32 }, "name", "age"));
// log(_.omit({ id: 1, name: "ID", age: 32 }, "name", "age"));
// var eq5 = (a) => a === 5;
// log(eq5(5));
// var neq5 = _.negate(eq5);
// log(neq5(5));

var value = _.chain([1, 2, 3])
  .map((n) => n * 2)
  .filter((n) => n <= 4)
  .value();

log(value);
