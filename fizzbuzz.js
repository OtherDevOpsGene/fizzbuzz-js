"use strict";

function fizzbuzz(n) {
  let resp = "";
  if (0 === n % 3) {
    resp += "fizz";
  }
  if (0 === n % 5) {
    resp += "buzz";
  }
  if ("" === resp) {
    resp = n;
  }
  return resp;
}

module.exports = fizzbuzz;
