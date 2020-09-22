const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const letterPositions = require("./letterPositions");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const head = require("./head");
const middle = require("./middle");
const tail = require("./tail");

module.exports = {
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  takeUntil: takeUntil,
  without: without,
  head:   head,
  tail:   tail,
  middle: middle
};
