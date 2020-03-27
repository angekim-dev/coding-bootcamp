const fs = require("fs");

// You will be using its readdir and stat methods in Part 1

function logSizes(path) {
    const contents = fs.readdir(
        __dirname,
        {
            withFileTypes: true
        },
        (err, items) => {
            if (err) {
                console.log(err, "ERROR!!!");
            } else {
                console.log(items);
                // for (let i in items) {
                //     console.log(i);

                fs.stat(__filename, (err, stats) => {
                    if (err) {
                        console.log("ERROR");
                    } else {
                        // console.log(stats.size);
                        console.log(path, ": ", stats.size);
                    }
                });
                // }
            }
        }
    );
}

console.log(
    logSizes("/Users/angelikakim/spsiced/msg-code/Week4/fun-with-fs/files")
);
// logSizes(__dirname + "/files");

// its readdirSync, statSync and writeFileSync methods in Part 2.
// function mapSizes(/Users/angelikakim/spiced/msg-code/Week4/fun-with-fs) {
//     const obj = {};

//     //do it al

//     return obj;
// }
// // once mapSizes works correctly
// fs.writeFile(
//     "files.json",

//     JSON.stringify(mapSizes(__dirname + "/files")), //get a string on one line
//     null, //not that important
//     4
// );

//JSON.stringify(obj, null, 4)
