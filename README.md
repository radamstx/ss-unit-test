# ss-unit-test

This project is for the purposes of an interview code challenge.

Caveat: This is my first JavaScript and Node project I've created.

Robert Adams 512-289-3850 <r.adams.tx@gmail.com>

## Getting Started

Pretty simple and straight forward project. Follow the steps below to run.

### Prerequisites

To run the project locally, you will want to make sure you have node and npm installed.
This project was developed on node v9.7.1 and npm version 5.6.0.


### Installing

To run the tests, you will need to install all dependencies. Within the root of the project directory, run:

```
npm install
```

## Running the tests

To run the tests:

```
npm test
```

## Continuous Integration

Upon commit, a build will start on circleci and tests will run. You may find the build here: https://circleci.com/gh/radamstx/ss-unit-test

### Required changes

Add, subtract, multiply, divide all had the incorrect operand in the calculation. Add and subtract needed the operand
swapped, divide and multiply needed the operand swapped.

### Thoughts

I err on the side of having more granular tests. I could have combined some of the unit tests (i.e. reflexive pairs of data),
but in the context of mathematics and computers, the order does matter and could conceivably yield different results.

