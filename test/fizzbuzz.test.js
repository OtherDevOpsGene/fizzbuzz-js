const assert = require("chai").assert;
const fizzbuzz = require("../fizzbuzz.js");

describe("fizzbuzz", function () {
  context("when divisible by 3", function () {
    it("should return fizz", function () {
      assert.equal(fizzbuzz(3), "fizz");
    });
  });
});
