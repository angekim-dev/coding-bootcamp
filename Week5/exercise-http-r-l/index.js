const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    // magic happens here
    req.on("error", err => {
        console.log("err in req:", err);
    });
    res.on("error", err => {
        console.log("err in res:", err);
    });

    let bonusInfo = "";

    let realDate = new Date();
    let day = realDate.getDate();
    let month = realDate.getMonth() + 1;
    let year = realDate.getFullYear();

    let hour = realDate.getHours();
    let minute = realDate.getMinutes();
    let second = realDate.getSeconds();

    bonusInfo +=
        day +
        "\t" +
        month +
        "\t" +
        year +
        "\t" +
        hour +
        "\t" +
        minute +
        "\t" +
        second +
        "\t" +
        req.method +
        "\t" +
        req.url +
        "\t" +
        req.headers["user-agent"];

    fs.appendFile("requests.txt", bonusInfo, err => {
        if (err) throw err;
        console.log(bonusInfo, " was appended to file!");
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
        let body = "";
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
