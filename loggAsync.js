const async = require('async');

// in a module
const hello = function (name, callback) {
    setTimeout(function () {
        callback(null, 'hello ' + name);
    }, 1000);
};

// in the node repl
async.log(hello, 'world');
'hello world'