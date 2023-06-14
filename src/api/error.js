export default class APIError extends Error {
    constructor(message, code) {
      super(message);
      this.name = "API Error";
      this.code = code;
    }
  }