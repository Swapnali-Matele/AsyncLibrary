const async = require('async');
// Example One
// const stack = [];

// const functionOne = function (callback) {
//     //perform action 
//     //callback(null, "frist function result")
//     callback("ftdhdh", null)
// }

// const functionTwo = function (callback) {
//     //perform action 
//     callback(null, "second function result")
// }
// const functionThree = function (callback) {
//     //perform action 
//     callback(null, "Third function result")
// }

// stack.push(functionOne);
// stack.push(functionTwo);
// stack.push(functionThree);

// async.parallel(stack, function (err, result) {
//     console.log(result);
// })


// example two 

const stack = {};

stack.getUserName = function (callback) {
    let userName = 'bob'
    callback(null, userName);
}
stack.getuserAge = function (callback) {
    let userAge = 23;
    callback(null, userAge);
}
stack.getuserGender = function (callback) {
    let userGender = 'Female'
    callback(null, userGender)
}

async.parallel(stack, function (err, result) {
    if (err) {
        console.log(err)
    }
    console.log(result)
})