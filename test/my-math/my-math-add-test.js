let assert = require("chai").assert;
let expect = require("chai").expect;
const MyMath = require("../../lib/my-math.js");
const {
  getRandomPositiveInteger,
  getRandomNegativeInteger,
  getRandomPositiveFloat,
  getRandomNegativeFloat
} = require("../test-helpers.js");

describe("My Math", function () {
  let myMath;

  describe("add", function () {
    beforeEach(function () {
      myMath = new MyMath();
    });

    // Base Case - Returns a number if 2 numbers are supplied
    it("returns a number if 2 numbers are supplied", function () {
      expect(myMath.add(0, 0)).to.be.a("number");
    });

    // Base Case - 0 + 0
    it("returns 0 for (0, 0)", function () {
      assert(myMath.add(0, 0) === 0);
    });

    // Base Case - 0 + 1
    it("returns 1 for (0, 1)", function () {
      assert(myMath.add(0, 1) === 1);
    });

    // Base Case - 1 + 0
    it("returns 1 for (1, 0)", function () {
      assert(myMath.add(1, 0) === 1);
    });

    // Base Case - 1 + 1
    it("returns 2 for (1, 1)", function () {
      assert(myMath.add(1, 1) === 2);
    });

    // Base Case - Returns a string if 2 strings are supplied
    it("returns a string if 2 strings are supplied", function() {
      expect(myMath.add("a", "b")).to.be.a("string");
    });

    // 0 + Int
    it("returns n for (0, n) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.add(0, rand) === rand);
    });

    // Int + 0
    it("returns n for (n, 0) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.add(rand, 0) === rand);
    });

    // 0 + -Int
    it("returns n for (0, n) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.add(0, rand) === rand);
    });

    // -Int + 0
    it("returns n for (n, 0) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.add(rand, 0) === rand);
    });

    // 1 + Int
    it("returns (n+1) for (1, n) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.add(1, rand) === 1 + rand);
    });

    // Int + 1
    it("returns (n+1) for (n, 1) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.add(rand, 1) === 1 + rand);
    });

    // 1 + -Int
    it("returns (n+1) for (1, n) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.add(1, rand) === 1 + rand);
    });

    // -Int + 1
    it("returns (n+1) for (n, 1) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.add(rand, 1) === 1 + rand);
    });

    // Int + Int
    it("returns (n+m) for (n, m) where n > 1 && m > 1", function () {
      let rand1 = getRandomPositiveInteger();
      let rand2 = getRandomPositiveInteger();
      assert(myMath.add(rand1, rand2) === rand1 + rand2);
    });

    // -Int + -Int
    it("returns (n+m) for (n, m) where n < 0 && m < 0", function () {
      let rand1 = getRandomNegativeInteger();
      let rand2 = getRandomNegativeInteger();
      assert(myMath.add(rand1, rand2) === rand1 + rand2);
    });

    // Int + -Int
    it("returns (n+m) for (n, m) where n > 0 && m < 0", function () {
      let rand1 = getRandomPositiveInteger();
      let rand2 = getRandomNegativeInteger();
      assert(myMath.add(rand1, rand2) === rand1 + rand2);
    });

    // Float + 1
    it("returns (n+1) for (n, 1) where n is a positive float", function () {
      let rand = getRandomPositiveFloat();
      assert(myMath.add(rand, 1) === 1 + rand);
    });

    // 1 + Float
    it("returns (n+1) for (n, 1) where n is a positive float", function () {
      let rand = getRandomPositiveFloat();
      assert(myMath.add(1, rand) === 1 + rand);
    });

    // Float + Float
    it("returns (n+m) for (n, m) where n and m are positive floats", function () {
      let rand1 = getRandomPositiveFloat();
      let rand2 = getRandomPositiveFloat();
      assert(myMath.add(rand1, rand2) === rand1 + rand2);
    });

    // -Float + -Float
    it("returns (n+m) for (n, m) where n and m are negative floats", function () {
      let rand1 = getRandomNegativeFloat();
      let rand2 = getRandomNegativeFloat();
      assert(myMath.add(rand1, rand2) === rand1 + rand2);
    });

    // -Float + Float
    it("returns (n+m) for (n,m) where n is a positive float and m is a negative float", function () {
      let rand1 = getRandomPositiveFloat();
      let rand2 = getRandomNegativeFloat();
      assert(myMath.add(rand1, rand2) === rand1 + rand2);
    });

    // Strings - 2 strings
    it("returns concatenation of n and m where n is a string and m is a string", function () {
      let str1 = "a";
      let str2 = "b";
      assert(myMath.add(str1, str2) === "ab");
    });

    // Strings - Int + String
    it("returns a concatenated string when adding a number and a string", function() {
      let num1 = 1;
      let str1 = "a";
      assert(myMath.add(num1, str1) === "1a");
    });

    // Strings - String + Int
    it("returns a concatenated string when adding a string and a number", function() {
      let str1 = "b";
      let num1 = 2;
      assert(myMath.add(str1, num1) === "b2");
    });
  });
});
