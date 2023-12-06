const expect = require("chai").expect;
const fizzbuzz = require("../fizzbuzz.js");

const tests = [
  {num: 1, expected: 1},
  {num: 2, expected: 2},
  {num: 3, expected: "fizz"},
  {num: 4, expected: 4},
  {num: 5, expected: "buzz"},
  {num: 6, expected: "fizz"},
  {num: 7, expected: 7},
  {num: 8, expected: 8},
  {num: 9, expected: "fizz"},
  {num: 10, expected: "buzz"},
  {num: 11, expected: 11},
  {num: 12, expected: "fizz"},
  {num: 13, expected: 13},
  {num: 14, expected: 14},
  {num: 15, expected: "fizzbuzz"},
  {num: 16, expected: 16},
  {num: 17, expected: 17},
  {num: 18, expected: "fizz"},
  {num: 19, expected: 19},
  {num: 20, expected: "buzz"},
];

describe("fizzbuzz: parameterized", function () {
  // eslint-disable-next-line mocha/no-setup-in-describe
  tests.forEach(({num, expected}) => {
    it(`${num} should return ${expected}`, function () {
      expect(fizzbuzz(num)).to.equal(expected);
    });
  });
});
