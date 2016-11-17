/**
 * Created by pfbongio on 17/11/2016.
 */

'use strict'

let bunyan = require('bunyan')

let log = null

class NoOpsLog {

    trace () {}

    debug () {}

    info () {}

    warn () {}

    error () {}

    fatal () {}

}

export function bunyanLog (options) {
    if (log) return log

    if (typeof options === 'string' && options.length > 0) {
        log = bunyan.createLogger({name: options})
    }
    if (typeof options === 'object') {
        log = options
    }
    if (!log) {
        log = new NoOpsLog()
    }

    return log
}

module.exports = bunyanLog
