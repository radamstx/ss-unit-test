// Returns a random positive integer
function getRandomPositiveInteger() {
  return Math.floor(Math.random() * (10000 - 2 + 1)) + 2;
}

// Returns a random negative integer
function getRandomNegativeInteger() {
  return -getRandomPositiveInteger();
}

// Returns a random positive float
function getRandomPositiveFloat() {
  return Math.random() * (10000 - 2) + 2;
}

// Returns a random negative float
function getRandomNegativeFloat() {
  return -getRandomPositiveFloat();
}

module.exports = { getRandomPositiveInteger, getRandomNegativeInteger, getRandomPositiveFloat, getRandomNegativeFloat };