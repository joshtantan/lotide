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

const tail = arr => {
  if (!arr) {
    return;
  } else if (arr.length === 1) {
    return arr;
  } else {
    return arr.slice(1, arr.length);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!