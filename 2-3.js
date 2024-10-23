function test(a, b, c) {
  console.log("a b c", a, b, c);
  console.log("this", this);
  console.log("arguments", arguments);
}

test(10);
test(10, undefined);
