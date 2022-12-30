const async = require('async');

let counter = 0

//whilst (condition, function, callback)
// whilst excute the function fn while condtion function returns true, it will call callback 
//function when the job is done or any error occurs 

async.whilst(
    function testCondtion() { return counter < 5; },
    function increaseCounter(callback) {
        counter++;
        console.log("couter is now", counter)
        //simulate ajax/processing
        //callback must be call once function is completed, ittakes an optional error arrgument

        //setTimeout(callback, 2000)
        setTimeout(callback('err'), 2000)
        function callback(err) {
            if (err) {
                console.log(err)
                return
            }
            console.log("Job is completed")
        }
    }
)