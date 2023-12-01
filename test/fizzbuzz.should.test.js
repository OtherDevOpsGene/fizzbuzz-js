var fizzbuzz = require("../fizzbuzz.js");
require("chai").should();

describe("fizzbuzz: using should", function () {
  context("when divisible by 3", function () {
    it("should return fizz", function () {
      fizzbuzz(3).should.equal("fizz");
    });
  });

  context("when divisible by 5", function () {
    it("should return buzz", function () {
      fizzbuzz(5).should.equal("buzz");
    });
  });

  context("when divisible by 15", function () {
    it("should return fizz", function () {
      fizzbuzz(15).should.equal("fizzbuzz");
    });
  });

  context("when not divisible by 3 or 5", function () {
    it("should return the number", function () {
      fizzbuzz(1).should.equal(1);
    });
  });
});
