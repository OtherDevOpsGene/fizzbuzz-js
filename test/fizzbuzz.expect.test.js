const expect = require("chai").expect;
const fizzbuzz = require("../fizzbuzz.js");

describe("fizzbuzz: using expects", function () {
  context("when divisible by 3", function () {
    it("should return fizz", function () {
      expect(fizzbuzz(3)).to.equal("fizz");
    });
  });

  context("when divisible by 5", function () {
    it("should return buzz", function () {
      expect(fizzbuzz(5)).to.equal("buzz");
    });
  });

  context("when divisible by 15", function () {
    it("should return fizz", function () {
      expect(fizzbuzz(15)).to.equal("fizzbuzz");
    });
  });

  context("when not divisible by 3 or 5", function () {
    it("should return the number", function () {
      expect(fizzbuzz(1)).to.equal(1);
    });
  });
});
