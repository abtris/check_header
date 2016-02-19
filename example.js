var checker = require('check_header');
var headersObject = {'Content-Type':'žluťoučký kůň'};
if (!checker.isValid(headersObject)) {
  console.log("Invalid header there!");
}
