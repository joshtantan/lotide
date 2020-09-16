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
    console.log(`✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actualArr} === ${expectedArr}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let midArr = [];
  const arrLength = array.length;

  if (arrLength > 2) {
    if (arrLength % 2 === 0) {
      let midLowIndex = (arrLength / 2) - 1;
      midArr.push(array[midLowIndex]);

      let midHighIndex = ++midLowIndex;
      midArr.push(array[midHighIndex]);
    } else {
      let midIndex = Math.ceil(arrLength / 2) - 1;
      midArr.push(array[midIndex]);
    }
  }
  
  return midArr;
};

// TEST CODE
assertArraysEqual(middle([1]), [], true);
assertArraysEqual(middle([1, 2]), [], true);
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);
