
var should = require('should');

var Myna = require('../index');

describe('basic test', function () {
  var myna;

  it('define myna', function () {
    myna = new Myna({
      1001: 'invalid params',
      1002: 'unknown key: %s',
      1003: 'invalid id %s found in %s'
    });
  });

  it('create error', function () {

    var err = myna.speak(1001);
    // console.log(err);
    should(err).Error;
  });

  it('create error with args', function () {

    (function () {
      throw myna.speak(1002, 'id');
    }).should.throw('unknown key: id');

    (function () {
      throw myna.speak('1003', 'foo', 'bar');
    }).should.throw('invalid id foo found in bar');

  });

});