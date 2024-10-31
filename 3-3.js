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
_.isObject = (obj) => {
  const type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
};

_.keys = function (data) {
  return _.isObject(data) ? Object.keys(data) : [];
};

function bloop(new_data, body) {
  return function (data, iter_predi) {
    var result = new_data(data);
    if (isArrayLike(data)) {
      for (var i = 0; i < data.length; i++) {
        body(iter_predi(data[i], i, data), result, data[i]);
      }
    } else {
      for (var i = 0, keys = _.keys(data); i < keys.length; i++) {
        body(iter_predi(data[keys[i]], keys[i], data), result, data[keys[i]]);
      }
    }
    return result;
  };
}
_.identity = function (v) {
  return v;
};
_.idtt = _.identity;
_.array = () => [];
_.push_to = (val, obj) => {
  obj.push(val);
  return val;
};
_.noop = function () {};

_.map = bloop(_.array, _.push_to);
_.each = bloop(_.identity, _.noop);
_.filter = bloop(_.array, (bool, arr, elem) =>
  bool ? arr.push(elem) : _.noop
);

_.values = function (list) {
  return _.map(list, _.identity);
};
_.args0 = _.identity;
_.args1 = function (a, b) {
  return b;
};
_.isFunction = (obj) => toString.call(obj) === "[object Function]";

_.has = function (obj, key) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
};

_.toArray = function (list) {
  return Array.isArray(list) ? list : _.values(list);
};

_.rest = function (list, num) {
  return _.toArray(list).slice(num || 1);
};

_.reverse = function (list) {
  return _.toArray(list).reverse();
};

_.rester = function (func, num) {
  return function () {
    return func.apply(null, _.rest(arguments, num));
  };
};
_.if = function (validator, func, alter) {
  return function () {
    return validator.apply(null, arguments)
      ? func.apply(null, arguments)
      : alter && alter.apply(null, arguments);
  };
};

_.toArray2 = _.if(Array.isArray, _.idtt, _.values);

function sub(a, b) {
  return a - b;
}
var sub2 = _.if(
  (a, b) => a >= b,
  sub,
  () => new Error("a가 b보다 작다")
);
var diff = _.if(
  (a, b) => a >= b,
  (a, b) => a - b,
  (a, b) => sub(b, a)
);
_.constant = function (v) {
  return function () {
    return v;
  };
};
_.safety = _.with_validator = _.if;
_.isNumber = (a) => toString.call(a) === "[object Number]";

var square = _.safety(_.isNumber, (a) => a * a, _.constant(0));

log(square("2"));

// log(_.toArray2({ a: 10, b: 300 }));

// log(diff(1, 15));
// log(sub2(10, 15));

// function sum(a, b, c, d) {
//   return (a || 0) + (b || 0) + (c || 0) + (d || 0);
// }

// log(_.keys(undefined));
// log(Object.keys(undefined));
// log(_.keys(() => {}));
// log(Object.keys(function () {}));
// log(_.rest({ 0: 1, 1: 10, 2: 100, 3: 1000 }, 2));

// _.filter = function (list, predicate) {
//   var newList = [];
//   _.each(list, (val, idx, data) => {
//     if (predicate(val, idx, data)) newList.push(val);
//   });
//   return newList;
// };
// log(_.filter({ a: 1, b: 2, c: 3, d: 4 }, (val) => val > 2));
// log(_.reverse({}));
