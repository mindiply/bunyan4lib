/**
 * Created by pfbongio on 17/11/2016.
 */

'use strict'

let expect = require('chai').expect

class TestLogger {
    constructor() {
        this.messages = {
            trace: [],
            debug: [],
            info: [],
            warn: [],
            error: [],
            fatal: []
        }
    }

    log(level, ...prms) {
        if (level in this.messages) this.messages[level].push([...prms])
    }

    trace(...prms) {
        this.log('trace', ...prms)
    }
    debug(...prms) {
        this.log('debug', ...prms)
    }
    info(...prms) {
        this.log('info', ...prms)
    }
    warn(...prms) {
        this.log('warn', ...prms)
    }
    error(...prms) {
        this.log('error', ...prms)
    }
    fatal(...prms) {
        this.log('fatal', ...prms)
    }
}


describe('Bunyan library testing', function() {
    describe('Passing in log object', function() {
        let testLog = new TestLogger()
        let preLog = require('../lib')
        console.log(preLog)
        let log = preLog(testLog)

        it ('Testing trace function', function() {
            log.trace('Single parameter')
            log.trace({test:1}, 'Two parameters')
            expect(testLog.messages.trace).to.have.length(2)
            expect(testLog.messages.trace[0]).to.have.length(1)
            expect(testLog.messages.trace[1]).to.have.length(2)
        })

        it ('Testing debug function', function() {
            log.debug('Single parameter')
            log.debug({test:1}, 'Two parameters')
            expect(testLog.messages.debug).to.have.length(2)
            expect(testLog.messages.debug[0]).to.have.length(1)
            expect(testLog.messages.debug[1]).to.have.length(2)
        })

        it ('Testing info function', function() {
            log.info('Single parameter')
            log.info({test:1}, 'Two parameters')
            expect(testLog.messages.info).to.have.length(2)
            expect(testLog.messages.info[0]).to.have.length(1)
            expect(testLog.messages.info[1]).to.have.length(2)
        })

        it ('Testing warn function', function() {
            log.warn('Single parameter')
            log.warn({test:1}, 'Two parameters')
            expect(testLog.messages.warn).to.have.length(2)
            expect(testLog.messages.warn[0]).to.have.length(1)
            expect(testLog.messages.warn[1]).to.have.length(2)
        })

        it ('Testing error function', function() {
            log.error('Single parameter')
            log.error({test:1}, 'Two parameters')
            expect(testLog.messages.error).to.have.length(2)
            expect(testLog.messages.error[0]).to.have.length(1)
            expect(testLog.messages.error[1]).to.have.length(2)
        })

        it ('Testing fatal function', function() {
            log.fatal('Single parameter')
            log.fatal({test:1}, 'Two parameters')
            expect(testLog.messages.fatal).to.have.length(2)
            expect(testLog.messages.fatal[0]).to.have.length(1)
            expect(testLog.messages.fatal[1]).to.have.length(2)
        })
    })

    let resolved = require.resolve('../lib');
    delete require.cache[resolved]
})


