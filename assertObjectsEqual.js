const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

let obj1 = {a: 1, b: 2};
let obj2 = {b: 2, a: 1};
assertObjectsEqual(obj1, obj2);

module.exports = assertObjectsEqual;
