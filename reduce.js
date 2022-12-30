const async = require('async');

const reduce = require('async/reduce')
const fs = require('fs');
const fileList = ['file1.txt', 'file2.txt', 'file3.txt'];
const withMissingFileList = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt'];

// asynchronous function that computes the file size in bytes
// file size is added to the memoized value, then returned
function getFileSizeInBytes(memo, file, callback) {
    console.log(memo)
    fs.stat(file, function (err, stat) {
        if (err) {
            return callback(err);
        }
        console.log(memo)

        callback(null, memo + stat.size);
        // console.log(memo)
    });
}

// Using callbacks
async.reduce(fileList, 2, getFileSizeInBytes, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result, 'aadadas');
        // 6000
        // which is the sum of the file sizes of the three files
    }
});