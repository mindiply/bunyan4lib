/**
 * Created by pfbongio on 17/11/2016.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bunyanLog = bunyanLog;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bunyan = require('bunyan');

var log = null;

var NoOpsLog = function () {
    function NoOpsLog() {
        _classCallCheck(this, NoOpsLog);
    }

    _createClass(NoOpsLog, [{
        key: 'trace',
        value: function trace() {}
    }, {
        key: 'debug',
        value: function debug() {}
    }, {
        key: 'info',
        value: function info() {}
    }, {
        key: 'warn',
        value: function warn() {}
    }, {
        key: 'error',
        value: function error() {}
    }, {
        key: 'fatal',
        value: function fatal() {}
    }]);

    return NoOpsLog;
}();

function bunyanLog(options) {
    if (log) return log;

    if (typeof options === 'string' && options.length > 0) {
        log = bunyan.createLogger({ name: options });
    }
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
        log = options;
    }
    if (!log) {
        log = new NoOpsLog();
    }

    return log;
}

module.exports = bunyanLog;