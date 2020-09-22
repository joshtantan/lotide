const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actualArr, expectedArr, expectedResult) {
  if (eqArrays(actualArr, expectedArr) === expectedResult) {
    console.log(`✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actualArr} === ${expectedArr}`);
  }
};

module.exports = assertArraysEqual;
