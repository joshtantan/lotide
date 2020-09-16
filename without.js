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

const assertArraysEqual = function(actualArr, expectedArr, expectedResult) {
  if (eqArrays(actualArr, expectedArr) === expectedResult) {
    console.log(`✅ Assertion Passed: "${actualArr}" === "${expectedArr}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actualArr}" === "${expectedArr}"`);
  }
};

const without = (inputArr, removeArr) => {
  let withoutArr = [];

  if (inputArr.length > 0 && removeArr.length > 0) {
    for (let i in inputArr) {
      for (let j in removeArr) {
        if (inputArr[i] !== removeArr[j] && Number(j) === removeArr.length - 1) {
          withoutArr.push(inputArr[i]);
          break;
        }
      }
    }
  }

  return withoutArr;
};

// Test code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3], true);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);