class MyException extends Error {
  constructor(message = "") {
    super(message);
    this.name = "MyException";
    this.httpStatusCode = 501;
    this.description = message;
  }
}

// MyException.prototype = Object.create(Error.prototype);

module.exports = MyException;
