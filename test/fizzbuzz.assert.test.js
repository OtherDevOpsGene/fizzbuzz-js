const assert = require("chai").assert;
const fizzbuzz = require("../fizzbuzz.js");

describe("fizzbuzz: using asserts", function () {
  context("when divisible by 3", function () {
    it("should return fizz", function () {
      assert.equal(fizzbuzz(3), "fizz");
    });
  });

  context("when divisible by 5", function () {
    it("should return buzz", function () {
      assert.equal(fizzbuzz(5), "buzz");
    });
  });

  context("when divisible by 15", function () {
    it("should return fizzbuzz", function () {
      assert.equal(fizzbuzz(15), "fizzbuzz");
    });
  });

  context("when not divisible by 3 or 5", function () {
    it("should return the number", function () {
      assert.equal(fizzbuzz(1), 1);
    });
  });
});