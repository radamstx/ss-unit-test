#!/bin/bash

if [[ "$CI" == "true" ]]; then
    mkdir -p test-results
    ./node_modules/.bin/mocha test --recursive --reporter mocha-junit-reporter --reporter-options mochaFile=./test-results/test-results.xml
else
    ./node_modules/.bin/mocha test --recursive
fi