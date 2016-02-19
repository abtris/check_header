// From NodeJS - https://github.com/nodejs/node/commit/2a2d3e1b0333441d1bd00def06d687f807067f6e

// True if val contains an invalid field-vchar
//  field-value    = *( field-content / obs-fold )
//  field-content  = field-vchar [ 1*( SP / HTAB ) field-vchar ]
//  field-vchar    = VCHAR / obs-text
function checkInvalidHeaderChar(val) {
  val = '' + val;
  for (var i = 0; i < val.length; i++) {
    var ch = val.charCodeAt(i);
    if (ch === 9) continue;
    if (ch <= 31 || ch > 255 || ch === 127) return true;
  }
  return false;
}

// Verifies that the given val is a valid HTTP token
// per the rules defined in RFC 7230
var token = /^[a-zA-Z0-9_!#$%&'*+.^`|~-]+$/;
function checkIsHttpToken(val) {
  return typeof val === 'string' && token.test(val);
}
// Get object with headers and return bool
function checkHeaders(headers) {
  for (var property in headers) {
    if (headers.hasOwnProperty(property)) {
        if (checkInvalidHeaderChar(headers[property])===true) {
          return true;
        }
        if (checkIsHttpToken(property)===false) {
          return true;
        }
    }
}
  return false;
}

module.exports = {
  checkInvalidHeaderChar: checkInvalidHeaderChar,
  checkIsHttpToken: checkIsHttpToken,
  checkHeaders: checkHeaders
};
