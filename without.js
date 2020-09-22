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

module.exports = without;
