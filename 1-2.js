var users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

function filter(list, predicate) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) newList.push(list[i]);
  }
  return newList;
}

function map(list, iteratee) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}

function logLength(value) {
  console.log(value.length);
  return value;
}

function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

var under_30 = (u) => u.age < 30;
var over_30 = (u) => u.age >= 30;

var bvalues = (key) => (list) => () => map(list, (v) => v[key]);

var ages = bvalues("age");
var names = bvalues("names");

// console.log(logLength(map(filter(users, under_30), bvalue("age"))));
// console.log(logLength(map(filter(users, over_30), bvalue("name"))));

// var ages = (list) => map(list, (v) => v.age);
// var names = (list) => map(list, (v) => v.name);

// console.log(logLength(ages(filter(users, under_30))));
// console.log(logLength(names(filter(users, over_30))));

console.log(filter(users, (user) => user.id === 3));
