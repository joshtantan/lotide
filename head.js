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
  
  const head = arr => {
    if (arr[0]) {
      return arr[0];
    }
  };