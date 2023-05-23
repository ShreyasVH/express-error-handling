const MyException = require('./myException');

class NotFoundException extends MyException {
  constructor(entity = "") {
    const message = entity + ' not found';
    super(message);
    this.name = "NotFoundException";
    this.httpStatusCode = 404;
    this.description = message;
  }
}

// NotFoundException.prototype = Object.create(Error.prototype);
//
module.exports = NotFoundException;
