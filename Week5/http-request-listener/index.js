const http = require("http");

const server = http.createServer((request, response) => {
    //runs every time when request made

    //first handling errors
    request.on("error", err => {
        console.log("err in req:", err);
    });
    response.on("error", err => {
        console.log("err in res:", err);
    });

    // console.log("request url:", request.url); //to what url you are making a request to
    // console.log("request method", request.method);
    // console.log("request headers:", request.headers);

    if (request.method == "GET") {
        if (request.url === "/secret-page") {
            //both statusCode and setHeader necessary for redirect to work
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end();
        } else {
            //crafting the response
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write("<h1> Happy HTTP day! </h1>");
            // sending the response
            response.end();
            // OR response.end(""<h1> Happy HTTP day! </h1>"");
        }
    } else if (request.method === "PUT") {
        response.statusCode = 200;
        response.end("<h1> you made a PUT request </h1>");
    } else if (request.method == "POST") {
        console.log("you made a POST request");

        //inside POST request!!

        let body = ""; //will contain all data which the user sends

        //listen for the specific event data
        request.on("data", chunk => {
            //adding chunks of data to empty variable body
            body += chunk;
        });

        //listen for another event, when data from client stops coming in
        request.on("end", () => {
            console.log("body:", body);
            response.setHeader("content-type", "text-html");
            response.statusCode = 200;
            response.end(
                "<h1> POST request has successfully been completed :) </h1>"
            );
        });
    } else if (request.method == "HEAD") {
        console.log("you made a HEAD request");
    }
});

//listen on a port, listen is a function, needs to be envoked
//here port 8080
server.listen(8080, () => console.log("server is listening ...")); //argument not required, but here callback function
