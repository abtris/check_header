[![npm version](https://badge.fury.io/js/check_header.svg)](https://badge.fury.io/js/check_header)
[![Build Status](https://travis-ci.org/abtris/check_header.svg?branch=master)](https://travis-ci.org/abtris/check_header)

# Check Header

Code is inherit from NodeJS internal functions introduced in v0.10.42, v0.12.10, v4.3.1 and v5.6.0.

## Install

```sh
npm install --save check_header
```

## Example

```js
var checker = require('check_header');
var headersObject = {'Content-Type':'žluťoučký kůň'};
if (!checker.isValid(headersObject)) {
  console.log("Invalid header there!");
}
```
