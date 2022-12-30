const async = require('async');

let targetNumber = 0

//async.forever(fn(next), callback(err))
//async.forever will excute fn indefinitely as far as long as next() is called without an error parameter
//as soon as next is called with an error parameter, the excution will stop and callback will be excuted with (err) passed in 

async.forever(
    function checkifDone(next) {
        targetNumber++;

        if (targetNumber === 20) {
            next("Target Number reached ... stopping forever")
        } else {
            console.log("increasing targetNumber", targetNumber)
            next();
        }
    },
    function finished(err) {
        if (err) {
            console.log(err);
        }
    }
)