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

function bloop(new_data, body, stopper) {
  return function (data, iter_predi) {
    iter_predi = iter_predi || _.identity;
    var result = new_data(data);
    var memo;
    if (isArrayLike(data)) {
      for (var i = 0; i < data.length; i++) {
        memo = iter_predi(data[i], i, data);
        if (!stopper) body(memo, result, data[i], i);
        else if (stopper(memo)) return body(memo, result, data[i], i);
      }
    } else {
      for (var i = 0, keys = _.keys(data); i < keys.length; i++) {
        memo = iter_predi(data[keys[i]], keys[i], data);
        if (!stopper) body(memo, result, data[keys[i]], keys[i]);
        else if (stopper(memo))
          return body(memo, result, data[keys[i]], keys[i]);
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
_.args2 = function (a, b, c) {
  return c;
};
_.lastArg = function () {
  const lastIndex = arguments.length - 1;
  return arguments[lastIndex];
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

_.push = function (obj, val) {
  obj.push(val);
  return obj;
};

_.filter = bloop(_.array, _.if(_.identity, _.rester(_.push)));

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

_.reject = bloop(_.array, _.if(_.identity, _.noop, _.rester(_.push)));
_.negate = function (func) {
  return function () {
    return !func.apply(null, arguments);
  };
};

_.not = (v) => !v;
_.reject = bloop(_.array, _.if(_.not, _.rester(_.push)));

_.find = bloop(_.noop, _.rester(_.identity, 2), _.identity);
_.findIndex = bloop(_.constant(-1), _.lastArg, _.identity);
_.findKey = bloop(_.noop, _.lastArg, _.identity);
_.some = bloop(_.constant(false), _.constant(true), _.identity);
_.every = bloop(_.constant(true), _.constant(false), _.not);

// log(_.reject([1, 2, 3], (v) => v > 2));
log(_.findIndex([1, 2, 3, 4, 5, 6, 7, 78, 3929, 2332], (a) => a === 78));
log(_.findKey({ name: "kiwon", age: 30 }, (v) => v === 30));
log(_.findKey({ name: "kiwon", age: 30 }, (v) => v === 31));

log(_.some([undefined, null, 2]));
log(_.every([1, 2, 0, 2]));
