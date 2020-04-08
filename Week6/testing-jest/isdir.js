const fs = require("fs");

module.exports.isdir = function isdir(path, callback) {
    fs.readdir(path, { withFileTypes: true }, (err, files) => {
        var fileTypes = typeof files;
        callback(err, fileTypes);
    });
};

// ***how would normally run the function***
// isdir(__dirname, function (err, item) {
//     if (err) ...etc...
// })
