const { _ } = require("./underscore");
function add(a, b) {
  return valid() ? a + b : new Error();

  function valid() {
    return Number.isInteger(a) && Number.isInteger(b);
  }
}
console.log(add(1, 2));
// console.log(add(1, "2"));

function L(str) {
  if (L[str]) return L[str];
  var splitted = str.split("=>");
  return (L[str] = new Function(splitted[0], "return (" + splitted[1] + ");"));
}
const res1 = L("n=>n*10")(10);
const res2 = L("n=>n*20")(10);
const res3 = L("a,b=>a*b")(10, 30);
// console.log(res1);
// console.log(res2);
// console.log(res3);

console.time("익명함수");
for (var i = 0; i < 100000; i++) {
  !(function (b) {
    return b;
  })(i);
}
console.timeEnd("익명함수");

console.time("new Function");
for (var i = 0; i < 100000; i++) {
  L("a=>a")(i);
}
console.timeEnd("new Function");

console.time("1");
var arr = Array(100000);
_.map(arr, function (v, i) {
  return i * 2;
});
console.timeEnd("1");

console.time("2");
_.map(arr, L("v,i=>i*2"));
console.timeEnd("2");

console.time("4");
_.map(arr, function (v, i) {
  return (function (v, i) {
    return i * 2;
  })(v, i);
});
console.timeEnd("4");

console.time("5");
_.map(arr, function (v, i) {
  return L("v,i=>i*2")(v, i);
});
console.timeEnd("5");

function flatten(arr) {
  return (function f(arr, new_arr) {
    arr.forEach((v) => (Array.isArray(v) ? f(v, new_arr) : new_arr.push(v)));
    return new_arr;
  })(arr, []);
}

console.log(flatten([1, [2], [3, 4, [5, [6, 7]]]]));

function flatten2(arr, new_arr) {
  arr.forEach((v) =>
    Array.isArray(v) ? flatten2(v, new_arr) : new_arr.push(v)
  );
  return new_arr;
}

console.log(flatten2([1, [2], [3, 4, [5, [6, 7]]]], []));

function flatten3(arr, new_arr) {
  if (!new_arr) return flatten3(arr, []);
  arr.forEach((v) =>
    Array.isArray(v) ? flatten2(v, new_arr) : new_arr.push(v)
  );
  return new_arr;
}
console.log(flatten3([1, [2], [3, 4, [5, [6, 7]]]]));
