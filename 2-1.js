var obj = { a: 1, b: 2 };
obj.c = 3;
obj["d"] = 4;
var e = "e";
obj[e] = 5;
function f() {
  return "f";
}
obj[f()] = 6;

var obj2 = { " a a a": 1 };
obj2[1 > 2 ? "a" : "b"] = 2;

var obj5 = { [true ? "a" : "b"]: 1 };

function obj8() {
  return null;
}
obj8.a = 1;
obj8.b = 2;

add1(10, 5);
// add2(10, 5);
// console.log(hi);
console.log(add2);

function add1(a, b) {
  return a + b;
}
var add2 = function (a, b) {
  return a + b;
};
