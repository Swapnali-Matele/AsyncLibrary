const async = require('async');
const fs = require('fs');

// dir1 is a directory that contains file1.txt, file2.txt
// dir2 is a directory that contains file3.txt, file4.txt
// dir3 is a directory that contains file5.txt
// dir4 does not exist

const fileList = ['dir1/file2.txt', 'dir2/file3.txt', 'dir3/file5.txt'];
const withMissingFileList = ['dir1/file1.txt', 'dir4/file2.txt'];

// asynchronous function that deletes a file
const deleteFile = function (file, callback) {
    fs.unlink(file, callback);
    console.log(file)
};

// Using callbacks
async.each(fileList, deleteFile, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(deleteFile);
        console.log('All files have been deleted successfully');
    }
});
