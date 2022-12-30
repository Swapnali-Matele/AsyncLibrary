const async = require('async');

// async.waterfall(task(i.e array of functions),callback)

async.waterfall([

    function task1(callback) {
        console.log("start")
        setTimeout(function () {
            console.log("T1 is complete")
            //passing value to next task 
            callback(null, "value from task 1")
        }, 2000)
    },
    function (task1Result, callback) {
        console.log(task1Result)
        setTimeout(function () {
            console.log("T2 complete")
            callback(null, "value from task 2")
                , 2000
        })
    },
    function (task2Result, callback) {
        console.log(task2Result)

        setTimeout(function () {
            console.log("task 3 is completed")
            callback(null)
        }, 2000)
    }


], function (err) {
    if (err) {
        throw new Error(err)
    } else {
        console.log("there is no error ")
    }
})