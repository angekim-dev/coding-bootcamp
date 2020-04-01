const express = require("express");
const app = express();
const generate = require("./exercise-portfolio.js"); //require module we created

const myHtml = generate.generateHtml(); // module required plus function from module

app.use(
    express.urlencoded({
        extended: false
    })
);
// console.log("myHtml: ", myHtml);
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use((req, res, next) => {
    if (req.url !== "/cookie" && !req.cookies.acceptedCookies) {
        res.cookie(("reqUrl", req.url));
        res.redirect("/cookie");
    } else {
        next();
    }
});

app.use(express.static(__dirname + "/projects")); //POSITION

app.get("/cookie", (req, res) => {
    res.send(
        `<form method='POST'>
        <h1>To use this site, you must accept cookies :'-(</h1>
            <input type="checkbox" name="accept">
            <h3>check to accept</h3>
            <button name="submit">submit</button>
            </form>`
    );
});

app.post("/cookie", (req, res) => {
    if (req.body.accept == "on") {
        // console.log("checked");
        res.cookie("acceptedCookies", true);
        res.redirect("/"); // or "back"?
    } else {
        res.send(`<h1>sorry, can't use the site</h1>`);
    }
});

app.get("/", (req, res) => {
    res.send(myHtml);
});

// app.get("/:name", (req, res) => {
//     if (!req.cookies.acceptedCookies && req.url !== "/cookie") {
//         res.cookie(("reqUrl", req.url));
//         res.redirect("/cookie");
//     } else {
//         console.log("otherwise");
//     }
// });

app.listen(8080, () => {
    console.log("express server running");
});
