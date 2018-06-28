#!/bin/bash

MOCHA_FILE=test-results.xml
./node_modules/.bin/mocha test --recursive --reporter mocha-junit-reporter
