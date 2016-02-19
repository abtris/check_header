# Check Header

Code is inherit from NodeJS internal functions introduced in v0.10.42, v0.12.10, v4.3.1 and v5.6.0.

## Install

    npm install check_header


## Example


    var checker = require('check_header');
    var headersObject = {'Content-Type':'žluťoučký kůň'};
    if (checker.checkHeaders(headersObject)) {
      console.log("Invalid header there!");
    }
