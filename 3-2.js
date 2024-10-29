import _ from "underscore";

var log = console.log;

var d1 = { name: "PJ", age: 25, length: 2 };
var d2 = [1, 2, 3];
var d3 = (function () {
  return arguments;
})(1, 2, 3);
var d5 = { length: 3 };
d5[0] = 1;
d5[1] = 2;
d5[2] = 3;
var d6 = "hihi";

log(d1, d2, d3, d5);

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var isArrayLike = function (list) {
  var length = list === null ? void 0 : list.length;
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};

log(isArrayLike(d1));

_.each(
  function (a, b) {},
  function () {
    console.log(arguments);
  }
);
log(_.keys(10));
log(_.keys(null));
_.each({ length: 4 }, function () {
  console.log(arguments);
});
_.each(0, function () {
  console.log(arguments);
});
_.each(undefined, function () {
  console.log(arguments);
});

function func1(data) {
  var keys = _.keys(data);
  for (var i = 0; i < keys.length; i++) {
    console.log("roof!");
  }
}
func1(null);
