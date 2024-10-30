var _ = {};
var log = console.log;
var testObject = { a: 3, b: 2, c: 1 };

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
function getLength(list) {
  return list === null ? void 0 : list.length;
}

function isArrayLike(list) {
  var length = getLength(list);
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
}

_.map = function (data, iteratee) {
  var new_list = [];
  if (isArrayLike(data)) {
    for (var i = 0; i < data.length; i++) {
      new_list.push(iteratee(data[i], i, data));
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key))
        new_list.push(iteratee(data[key], key, data));
    }
  }
  return new_list;
};

_.each = function (data, iteratee) {
  if (isArrayLike(data)) {
    for (var i = 0; i < data.length; i++) {
      iteratee(data[i], i, data);
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key)) iteratee(data[key], key, data);
    }
  }
};

_.identity = function (v) {
  return v;
};
_.idtt = _.identity;
_.values = function (list) {
  return _.map(list, _.identity);
};
_.args0 = _.identity;
_.args1 = function (a, b) {
  return b;
};

_.keys = function (list) {
  return _.map(list, _.args1);
};

// log(_.values(testObject));
// log(_.keys([1, 2, 3]));
// _.each([1, 2, 3], log);
_.each(testObject, log);
