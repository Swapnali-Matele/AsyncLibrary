const async = require('async');
const fs = require('fs');

let directoryList = ['dir1', 'dir2', 'dir3'];
let withMissingDirectoryList = ['dir1', 'dir2', 'dir3', 'dir4'];

// Using callbacks
async.concat(directoryList, fs.readdir, function (err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
        // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
    }
});

// Error Handling
// async.concat(withMissingDirectoryList, fs.readdir, function (err, results) {
//     if (err) {
//         console.log(err);
//         // [ Error: ENOENT: no such file or directory ]
//         // since dir4 does not exist
//     } else {
//         console.log(results);
//     }
// });
