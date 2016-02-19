var assert = require('chai').assert;
var headers = require('../lib/headers');

describe('Test headers', function(){
  it ('Check normal header', function(){
    var headersObject = {'Content-Type':'application/json'};
    assert.equal(headers.checkHeaders(headersObject), false);
  });
  it ('Check invalid header', function(){
    var headersObject = {'Příliš':'žluťoučký kůň'};
    assert.equal(headers.checkHeaders(headersObject), true);
  });
  it ('Check invalid header', function(){
    var headersObject = {'Content-Type':'žluťoučký kůň'};
    assert.equal(headers.checkHeaders(headersObject), true);
  });
});
