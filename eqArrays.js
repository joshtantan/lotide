const assertEqual = function(actual, expected) {
  if (typeof actual === "string") {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" === "${expected}"`);
    }
  } else {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
    }
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
