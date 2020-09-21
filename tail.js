const tail = arr => {
  if (!arr) {
    return;
  } else if (arr.length === 1) {
    return arr;
  } else {
    return arr.slice(1, arr.length);
  }
};

module.exports = tail;
