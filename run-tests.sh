#!/bin/bash

mkdir -p test-results
./node_modules/.bin/mocha test --recursive --reporter mocha-junit-reporter --reporter-options mochaFile=./test-results/test-results.xml
