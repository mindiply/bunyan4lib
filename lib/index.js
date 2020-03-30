"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bunyanLog = bunyanLog;

var _bunyan = _interopRequireDefault(require("bunyan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NoOpsLog {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  trace() {} // eslint-disable-next-line @typescript-eslint/no-empty-function


  debug() {} // eslint-disable-next-line @typescript-eslint/no-empty-function


  info() {} // eslint-disable-next-line @typescript-eslint/no-empty-function


  warn() {} // eslint-disable-next-line @typescript-eslint/no-empty-function


  error() {} // eslint-disable-next-line @typescript-eslint/no-empty-function


  fatal() {}

}

let log = null;

function bunyanLog(options) {
  if (log) return log;

  if (typeof options === "string" && options.length > 0) {
    try {
      log = _bunyan.default.createLogger({
        name: options
      });
    } catch (err) {
      log = new NoOpsLog();
    }
  }

  if (typeof options === "object") {
    log = options;
  }

  if (!log) {
    log = new NoOpsLog();
  }

  return log;
}

module.exports = bunyanLog;