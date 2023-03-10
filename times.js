const async = require('async')


// Pretend this is some complicated async factory
var createUser = function (id, callback) {
    callback(null, {
        id: 'user' + id
    });
};

// generate 5 users
async.times(5, function (n, next) {
    createUser(n, function (err, user) {
        next(err, user);

        console.log(user)
    });
}, function (err, users) {
    // we should now have 5 users
});