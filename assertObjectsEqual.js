const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    let i = 0;

    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Return false with arr1[${i}]: ${arr1[i]} and arr2[${i}]: ${arr2[i]}`);
        return false;
      }

      i++;
    }
    
    return true;
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1KeyTotal = Object.keys(object1).length;
  const obj2KeyTotal = Object.keys(object2).length;

  if (obj1KeyTotal === obj2KeyTotal) {
    for (const key in object1) {
      // Check if values are both arrays or not
      if (typeof object1[key] === "object" && typeof object2[key] === "object") {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] !== "object" && typeof object2[key] !== "object") {
        if (object1[key] !== object2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
};

// FUNCTION IMPLEMENTATION
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
