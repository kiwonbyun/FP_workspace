var _ = {};

function not(v) {
  return !v;
}
function beq(a) {
  return function (b) {
    return a === b;
  };
}

_.map = function (list, iteratee) {
  var newList = [];
  for (var i = 0, len = list.length; i < len; i++) {
    newList.push(iteratee(list[i], i, list));
  }
  return newList;
};
_.filter = function (list, predicate) {
  var newList = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i], i, list)) newList.push(list[i]);
  }
  return newList;
};

_.find = function (list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return list[i];
  }
};

_.findIndex = function (list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

_.identity = function (v) {
  return v;
};

_.truthy = function (v) {
  return !!v;
};

_.falsy = function (v) {
  return !v;
};

_.compose = function () {
  var args = arguments;
  var start = args.length - 1;
  return function () {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
};

_.some = _.compose(not, not, positive);

_.every = _.compose(beq(-1), negativeIndex);

function positive(list) {
  return _.find(list, _.identity);
}
function negativeIndex(list) {
  return _.findIndex(list, not);
}

module.exports = {
  _,
};
