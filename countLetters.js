const countLetters = words => {
  const letterCounter = {};

  for (const letter of words) {
    if (letterCounter[letter]) {
      letterCounter[letter] += 1;
    } else {
      letterCounter[letter] = 1;
    }
  }

  return letterCounter;
};

module.exports = countLetters;
