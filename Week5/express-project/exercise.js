const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(cookieParser());
app.use(express.static(__dirname + "/projects")); //POSITION

// app.get("/:muffin", (req, res) => {
//     res.redirect("/cookie");
// });

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
        console.log("checked");
        res.cookie("authenticated", true);
        res.redirect(".."); // or "back"?
    } else {
        res.send(`<h1>sorry, can't use the site</h1>`);
    }
});

app.listen(8080, () => {
    console.log("express server running");
});
