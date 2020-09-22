const middle = function(arr) {
  let midArr = [];
  const arrLength = arr.length;

  if (arrLength > 2) {
    if (arrLength % 2 === 0) {
      let midLowIndex = (arrLength / 2) - 1;
      midArr.push(arr[midLowIndex]);

      let midHighIndex = ++midLowIndex;
      midArr.push(arr[midHighIndex]);
    } else {
      let midIndex = Math.ceil(arrLength / 2) - 1;
      midArr.push(arr[midIndex]);
    }
  }
  
  return midArr;
};

module.exports = middle;
