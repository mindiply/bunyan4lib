/**
 * Created by pfbongio on 17/11/2016.
 */
let expect = require('chai').expect

describe('Default logger', function() {
    let preLog = require('../lib')
    let log = preLog('TEST')

    it ('Testing trace function', function() {
        log.trace('Single parameter')
        log.trace({test:1}, 'Two parameters')
    })

    it ('Testing debug function', function() {
        log.debug('Single parameter')
        log.debug({test:1}, 'Two parameters')
    })

    it ('Testing info function', function() {
        log.info('Single parameter')
        log.info({test:1}, 'Two parameters')
    })

    it ('Testing warn function', function() {
        log.warn('Single parameter')
        log.warn({test:1}, 'Two parameters')
    })

    it ('Testing error function', function() {
        log.error('Single parameter')
        log.error({test:1}, 'Two parameters')
    })

    it ('Testing fatal function', function() {
        log.fatal('Single parameter')
        log.fatal({test:1}, 'Two parameters')
    })

    let resolved = require.resolve('../lib');
    delete require.cache[resolved]
})
