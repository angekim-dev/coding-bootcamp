const fs = require("fs");

// You will be using its readdir and stat methods in Part 1

// function logSizes(path) {
//     fs.readdir(
//         path,
//         {
//             withFileTypes: true
//         },
//         (err, items) => {
//             if (err) {
//                 console.log(err, "readdir ERROR!!!");
//             } else {
//                 // console.log("items inside __dirname: ", items);
//                 //
//                 // console.log(item.name, item.isFile(), item.isDirectory());
//                 for (const item of items) {
//                     const pathAndName = path + "/" + item.name;
//                     if (item.isFile() == true) {
//                         fs.stat(pathAndName, (err, file) => {
//                             if (err) {
//                                 console.log("isFile ERROR", err);
//                             } else {
//                                 console.log(pathAndName + ":" + file.size);
//                             }
//                         });
//                     } else if (item.isDirectory() == true) {
//                         logSizes(pathAndName);
//                     }
//                 }
//             }
//         }
//     );
// }

// logSizes(__dirname + "/files");

// its readdirSync, statSync and writeFileSync methods in Part 2.
function mapSizes(path) {
    const obj = {};
    const items = fs.readdirSync(
        //flow is blocked until the whole file is read
        path,
        {
            withFileTypes: true
        }
    );
    for (const item of items) {
        const pathAndName = path + "/" + item.name;
        if (item.isFile() == true) {
            const stat = fs.statSync(pathAndName);
            console.log(stat.size);
        } else if (item.isDirectory() == true) {
            mapSizes(pathAndName);
        }
    }
    //do it al
    // console.log(items.name, item.isFile(), item.isDirectory());
    return obj;
}
console.log(mapSizes(__dirname + "/files"));
// once mapSizes works correctly
// fs.writeFile(
//     "files.json",

//     JSON.stringify(mapSizes(__dirname + "/files")), //get a string on one line
//     null, //not that important
//     4
// );

// JSON.stringify(obj, null, 4);
