var add = function (a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

var sub = function (a, b, callback) {
  setTimeout(() => {
    callback(a - b);
  }, 1000);
};

var div = function (a, b, callback) {
  setTimeout(() => {
    callback(a / b);
  }, 1000);
};

add(10, 15, function (a) {
  sub(a, 5, function (a) {
    div(a, 10, function (r) {
      console.log(r);
    });
  });
});

function wrap(func) {
  return function () {
    return func.apply(null, arguments);
  };
}

var add = wrap(function (a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 100);
});

add(5, 10, function (a) {
  console.log(a);
});

// console.log(div(sub(add(10, 15), 5), 10));
