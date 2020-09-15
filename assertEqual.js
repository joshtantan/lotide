// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (typeof actual === "string") {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑 Assertion Failed: "${actual}" === "${expected}"`);
    };
  } else {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} === ${expected}`);
    };
  };
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

/*
If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
Some examples:

Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
Assertion Passed: 1 === 1
Write out a few calls to it and confirm that it is indeed working as expected.

Test at least the following scenarios:

Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers
*/