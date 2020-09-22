# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Joshua Tan as part of his learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joshtantan/lotide`

**Require it:**

`const _ = require('@joshtantan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: checks if actual === expected and logs result to console
* `eqArrays(arr1, arr2)`: checks if each element of arr1 === each element of arr2 and returns a boolean
* `assertArraysEqual(actualArr, expectedArr, expectedResult)`: checks if each element of actualArr === each element of expectedArr and logs result to console
* `eqObjects(obj1, obj2)`: checks if each property-value of obj1 === each property-value of obj2 and returns a boolean
* `assertObjectsEqual(actual, expected)`: checks if each property-value of actual === each property-value of expected and logs result to console
* `countOnly(allItems, itemsToCount)`: counts the frequency of each item listed in the object, itemsToCount, in the array, allItems, and returns the results in an object
* `countLetters(words)`: counts the frequency of each letter in the string, words, and returns the results in an object
* `letterPositions(sentence)`: finds the indices of each character in the string, sentence, and returns the results in an object
* `findKey(obj, callback)`: finds the first property key in the object, obj, that causes the callback function, callback, to return true and returns it
* `findKeyByValue(inputObj, targetVal)`: finds the first property key in the object, inputObj, whose value matches that of the input, targetVal, and returns it
* `map(array, callback)`: returns a new array that is populated with the results of the function, callback, being applied on each element in the array, array
* `takeUntil(arr, callback)`: checks if each element of the array, arr, passed in the function, callback, one-by-one in respective order returns true and adds it to a new array until the first element that causes the function, callback, to return false
* `without(inputArr, removeArr)`: returns a new array that is populated with the elements of the array, inputArr, that do not match any elements in the array, removeArr
* `head(arr)`: returns the first element of the array, arr
* `tail(arr)`: returns the array, arr, without its first element
* `middle(arr)`: returns the middle 1 (if arr has an odd number of elements) or 2 (if arr has an even number of elements) elements in the array, arr
