let assert = require("chai").assert;
let expect = require("chai").expect;
const MyMath = require("../../lib/my-math.js");
const {
  getRandomPositiveInteger,
  getRandomNegativeInteger,
  getRandomPositiveFloat,
  getRandomNegativeFloat
} = require("../test-helpers.js");

describe("My Math", function() {
  describe("subtract", function () {
    let myMath;

    beforeEach(function () {
      myMath = new MyMath();
    });

    // Base Case - Returns a number if 2 numbers are supplied
    it("returns a number if 2 numbers are supplied", function () {
      expect(myMath.subtract(0, 0)).to.be.a("number");
    });

    // Base Case - 0 - 0
    it("returns 0 for (0, 0)", function () {
      assert(myMath.subtract(0, 0) === 0);
    });

    // Base Case - 0 - 1
    it("returns -1 for (0, 1)", function () {
      assert(myMath.subtract(0, 1) === -1);
    });

    // Base Case - 1 - 0
    it("returns 1 for (1, 0)", function () {
      assert(myMath.subtract(1, 0) === 1);
    });

    // Base Case - 1 - 1
    it("returns 0 for (1, 1)", function () {
      assert(myMath.subtract(1, 1) === 0);
    });

    // Base Case - Doesn't blow up when subtracting to strings (NaN)
    it("returns NaN when subtracting 2 strings", function() {
      expect(myMath.subtract("a", "b")).to.be.NaN;
    });

    // 0 - Int
    it("returns -n for (0, n) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.subtract(0, rand) === -rand);
    });

    // Int - 0
    it("returns n for (n, 0) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.subtract(rand, 0) === rand);
    });

    // 0 - -Int
    it("returns -n for (0, n) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.subtract(0, rand) === -rand);
    });

    // -Int - 0
    it("returns n for (n, 0) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.subtract(rand, 0) === rand);
    });

    // 1 - Int
    it("returns (1-n) for (1, n) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.subtract(1, rand) === 1 - rand);
    });

    // Int - 1
    it("returns (n-1) for (n, 1) where n > 1", function () {
      let rand = getRandomPositiveInteger();
      assert(myMath.subtract(rand, 1) === rand - 1);
    });

    // 1 - -Int
    it("returns (1+n) for (1, n) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.subtract(1, rand) === 1 - rand);
    });

    // -Int - 1
    it("returns (n-1) for (n, 1) where n < 0", function () {
      let rand = getRandomNegativeInteger();
      assert(myMath.subtract(rand, 1) === rand - 1);
    });

    // Int - Int
    it("returns (n-m) for (n, m) where n > 1 && m > 1", function () {
      let rand1 = getRandomPositiveInteger();
      let rand2 = getRandomPositiveInteger();
      assert(myMath.subtract(rand1, rand2) === rand1 - rand2);
    });

    // -Int - -Int
    it("returns (n+m) for (n, m) where n < 0 && m < 0", function () {
      let rand1 = getRandomNegativeInteger();
      let rand2 = getRandomNegativeInteger();
      assert(myMath.subtract(rand1, rand2) === rand1 - rand2);
    });

    // Int - -Int
    it("returns (n+m) for (n, m) where n > 0 && m < 0", function () {
      let rand1 = getRandomPositiveInteger();
      let rand2 = getRandomNegativeInteger();
      assert(myMath.subtract(rand1, rand2) === rand1 - rand2);
    });

    // Float - 1
    it("returns (n-1) for (n, 1) where n is a positive float", function () {
      let rand = getRandomPositiveFloat();
      assert(myMath.subtract(rand, 1) === rand - 1);
    });

    // 1 - Float
    it("returns (1-n) for (n, 1) where n is a positive float", function () {
      let rand = getRandomPositiveFloat();
      assert(myMath.subtract(1, rand) === 1 - rand);
    });

    // Float - Float
    it("returns (n-m) for (n, m) where n and m are positive floats", function () {
      let rand1 = getRandomPositiveFloat();
      let rand2 = getRandomPositiveFloat();
      assert(myMath.subtract(rand1, rand2) === rand1 - rand2);
    });

    // -Float - -Float
    it("returns (n+m) for (n, m) where n and m are negative floats", function () {
      let rand1 = getRandomNegativeFloat();
      let rand2 = getRandomNegativeFloat();
      assert(myMath.subtract(rand1, rand2) === rand1 - rand2);
    });

    // -Float - Float
    it("returns (n-m) for (n,m) where n is a positive float and m is a negative float", function () {
      let rand1 = getRandomPositiveFloat();
      let rand2 = getRandomNegativeFloat();
      assert(myMath.subtract(rand1, rand2) === rand1 - rand2);
    });

    // Int - String Doesn't blow up (NaN)
    it("returns NaN when subtracting a string from a number", function() {
      let num1 = 1;
      let str1 = "a";
      expect(myMath.subtract(num1, str1)).to.be.NaN;
    });

    // String - Int Doesn't blow up (NaN)
    it("returns NaN when subtracting a number from a string", function() {
      let num1 = 1;
      let str1 = "a";
      expect(myMath.subtract(str1, num1)).to.be.NaN;
    });
  });
});
