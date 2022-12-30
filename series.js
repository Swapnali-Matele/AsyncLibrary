const async = require('async');


async.series([

    function function1(callback) {
        callback(null, "result of function one")
    },
    function function2(callback) {
        callback(null, "result of function two")
    }, function function3(callback) {
        callback(null, "result of function three")
    }
], function (err, results) {
    console.log(results);
})