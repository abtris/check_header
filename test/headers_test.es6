import headers from '../src/headers';
import assert from 'assert';

describe('Test headers', () => {
  it('Check normal header', () => {
    const headersObject = {'Content-Type': 'application/json'};
    assert.equal(headers.isValid(headersObject), true);
  });
  it('Check invalid header in both parts', () => {
    const headersObject = {'Příliš': 'žluťoučký kůň'};
    assert.equal(headers.isValid(headersObject), false);
  });
  it('Check invalid header value', () => {
    const headersObject = {'Content-Type': 'žluťoučký kůň'};
    assert.equal(headers.isValid(headersObject), false);
  });
  it('Check valid header value', () => {
    const headersObject = {'Test': 'Düsseldorf'};
    assert.equal(headers.isValid(headersObject), true);
  });
  it('Check invalid header name', () => {
    const headersObject = {'Příliš': 'application/json'};
    assert.equal(headers.isValid(headersObject), false);
  });
});
