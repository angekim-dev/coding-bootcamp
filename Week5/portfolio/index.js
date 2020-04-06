const obj = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".pgg": "image/png",
    ".svg": "image/svg+xml"
};
const http = require("http");
const fs = require("fs");
const path = require("path");

const generate = require("./exercise.js"); //require module we created

const myHtml = generate.generateHtml(); // module required plus function from module

console.log("myHtml: ", myHtml);

http.createServer((req, res) => {
    // This is how we create a read stream and pipe it to a write stream...
    // console.log(__dirname + '/projects/panes/panes.css');

    // const readStream = fs.createReadStream(__dirname + '/projects/panes/panes.css');
    // readStream.pipe(res);
    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }

    if (req.url === "/") {
        return res.end(myHtml);
    }

    const filePath = __dirname + "/projects" + req.url;
    // console.log('filePath: ',filePath);

    // traversal attack..
    // use path.normalize to fix this...
    // console.log(path.normalize('/users/petea/../../wp-config/passwords.txt'));

    if (!path.normalize(filePath).startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        console.log("INTRUDER ALERT!!");
        return res.end();
    }

    // console.log("Please serve me the ", req.url);

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in fs.stat", err);
            // this means we dont have anything... i.e. not found
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            // console.log("it's a file!", filePath);
            // let's figure out the extension name of a file....
            const extension = path.extname(filePath);
            // console.log("extension: ", extension);
            // we want to create a readstream from the filePath...
            const readStreamFile = fs.createReadStream(filePath);

            // we need to figure out what header to send based on the extension.
            // we could do a series of if/else statement...

            // or...use an object...

            res.setHeader("Content-Type", obj[extension]);
            readStreamFile.pipe(res);
            readStreamFile.on("error", err => {
                console.log("err in read stream html", err);
                res.statusCode = 500;
                res.end();
            });
        } else {
            // console.log("it's a directory", filePath);
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", err => {
                    console.log("err in read stream html", err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                // console.log("redirecting to the /");
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                return res.end();
            }
        }
    });
}).listen(8080, () => console.log("my portfolio is up!"));
