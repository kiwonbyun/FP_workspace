const { _ } = require("./underscore");
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

function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
}
function findIndex(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) return i;
  }
}

function bmatch1(key, val) {
  return function (obj) {
    return obj[key] === val;
  };
}

function object(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
}
function match(obj, obj2) {
  for (var key in obj2) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
}
function bmatch(obj2, val) {
  if (arguments.length == 2) obj2 = object(obj2, val);

  return function (obj) {
    return match(obj, obj2);
  };
}
console.log(_.some([0, null, 1]));
console.log(_.every([0, "null", 1]));

var greet = function (name) {
  return "hi " + name;
};
var exclaim = function (statement) {
  return statement.toUpperCase() + "!";
};

var welcome = _.compose(greet, exclaim);
console.log(welcome("moe"));
