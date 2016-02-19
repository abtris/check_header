var assert = require('chai').assert;
var headers = require('../lib/headers');

describe('Test headers', function(){
  it ('Check normal header', function(){
    var headersObject = {'Content-Type':'application/json'};
    assert.equal(headers.isValid(headersObject), true);
  });
  it ('Check invalid header in both parts', function(){
    var headersObject = {'Příliš':'žluťoučký kůň'};
    assert.equal(headers.isValid(headersObject), false);
  });
  it ('Check invalid header value', function(){
    var headersObject = {'Content-Type':'žluťoučký kůň'};
    assert.equal(headers.isValid(headersObject), false);
  });
  it ('Check invalid header name', function(){
    var headersObject = {'Příliš':'application/json'};
    assert.equal(headers.isValid(headersObject), false);
  });
});
