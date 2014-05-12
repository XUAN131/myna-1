exports = module.exports = Myna;

var util = require('util');

/**
 * [Myna construction]
 * ...
 * @author bibig@me.com
 * @update [2014-05-12 21:10:47]
 * @param  {object} messages 
 *         eg: { '1001': 'no data found', '1003': 'invalid param: %s'}
 *     
 */


function Myna (messages) {
  this.messages = messages;
}

Myna.prototype.speak = function (code/*,var1, var2*/) {
  var error, message, args = [];
  
  if ( code === undefined || code === null || code === '') {
    throw new Error('Missing error code !');
  }

  code += '';

  message = this.messages[code];
  
  if ( ! message ) {
    throw new Error('Undefined error code: [' + code + ']');
  }
  
  args.push(message);
  
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  
  message = util.format.apply(util, args);
  
  error = new Error(message);
  error.code = code;
  
  return error;
};