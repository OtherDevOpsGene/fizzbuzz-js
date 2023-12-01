var fizzbuzz = require("../fizzbuzz.js");
var assert = require("chai").assert;

describe("fizzbuzz", function () {
  context("when divisible by 3", function () {
    it("should return fizz", function () {
      assert.equal(fizzbuzz(3), "fizz");
    });
  });
});
