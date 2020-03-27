const fs = require("fs");

// You will be using its readdir and stat methods in Part 1

function logSizes(path) {
    const content = fs.readdir(
        path,
        {
            withFileTypes: true
        },
        (err, items) => {
            if (err) {
                console.log(err, "readdir ERROR!!!");
            } else {
                // console.log("items inside __dirname: ", items);
                //
                // console.log(item.name, item.isFile(), item.isDirectory());
                for (const item of items) {
                    const pathAndName = path + "/" + item.name;
                    if (item.isFile() == true) {
                        fs.stat(pathAndName, (err, file) => {
                            if (err) {
                                console.log("isFile ERROR", err);
                            } else {
                                console.log(pathAndName + ":" + file.size);
                            }
                        });
                    } else if (item.isDirectory() == true) {
                        logSizes(pathAndName);
                    }
                }
                // if (item.isFile() == true) {
                //     fs.stat(__filename, (err, stats) => {
                //         if (err) {
                //             console.log("ERROR");
                //         } else {
                //             // console.log(stats.size);
                //             console.log(path, "filename: ", stats.size);
                //         }
                //     });
                // } else {
                //     console.log("not a file");
                // }
                // }
            }
        }
    );
}

logSizes(__dirname + "/files");

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
