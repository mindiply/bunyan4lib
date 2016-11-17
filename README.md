# bunyan4lib
Use bunyan in libraries, allowing clients to turn off logging, use a default logger
or provide their own bunyan logger.

The default logger uses the bunyan defaults and uses a logger with name LIB.

# Install

~~~
npm install @bongione/bunyan4lib
~~~

# Usage

In your main library file:

~~~

module.exports = (options) => {

    let log = require('@bongione/bunyan4lib')(options.log)
    
    // If your module expects configuration parameters
    let other_module = require('...')({log : log, ...otherOptions})
     
    // If your module calls the @bongione/bunyan4lib library itself.
    // The bunyan4lib require then should be before the first module import
    let your_module = require('...')
    
}
~~~


In your module:
 
~~~

let log = require('@bongione/bunyan4lib')()

...

if (false) log.error(err, 'Unexpected error, argh!')
~~~

**options.log** can have the following values:

* **falsy** turn all logging off. This is the default
* Object with the fields:
    * **name** String representing the name of the logger. If one is not provided 'LIB' will be used
    * **log** a bunyan logger, which will then be used instead of creating a standard one.

# License

Apache 2.0
