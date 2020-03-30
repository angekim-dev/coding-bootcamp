const http = require("http");
const server = http.createServer((req, res) => {
    // magic happens here
    req.on("error", err => {
        console.log("err in req:", err);
    });
    res.on("error", err => {
        console.log("err in res:", err);
    });

    console.log("request url: ", req.url);
    console.log("request method: ", req.method);
    console.log("request headers: ", req.headers);

    if (req.method == "GET") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.write(`
<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!
</html>`);
        res.end();
    } else if (req.method == "HEAD") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        // do not write body before sending response
        res.end();
    } else if (req.method == "POST") {
        var body = "";
        req.on("data", chunkOfData => {
            body += chunkOfData;
        });
        console.log("body:", body);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => console.log("server is listening ..."));
