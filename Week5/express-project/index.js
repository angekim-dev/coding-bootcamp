const express = require("express");
const app = express();
// creating gigantic object with many properties and functionalities
const cookieParser = require("cookie-parser");

///////// MIDDLEWARE ////////
//provided by express, makes sure we read req.body property by grabbing user's input and parsing it for us
// holds things together

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(cookieParser());

//static files middleware
// this middleware serves all our static files (html, css, images ...)
// what you pass to static will be the directory that your projects live in
app.use(express.static(__dirname + "/public")); //need to create public folder first

// write our own middleware
app.use((req, res, next) => {
    // console.log("I am a middleware");
    console.log("ran: " + req.method);
    console.log("at route: " + req.url);
    next(); //IMPORTANT to stop the function
});

///////ROUTES///////
///// listening for the / route to be hit, and we are running a function once it happens
// sending back an html snipped in our response
app.get("/", (req, res) => {
    // console.log("GET/route");
    //takes in an html snippet
    console.log("req.cookies ", req.cookies); //read our cookies
    res.send("<h1>yay express</h1>");
});

//sending back a file
app.get("/about", (req, res) => {
    //if add /about to url
    // console.log("GET /about route");

    res.cookie("authenticated", true); //set our cookie
    res.sendFile(__dirname + "/index.html");
});

//Dynamic routing
app.get("/about/:name", (req, res) => {
    //can add /ANYTHING to url, still goes to index.html
    //also doesn't have to be :name

    // console.log(`GET /about/${req.params.name} route`);
    // console.log("req.params: ", req.params);
    //gives us access to the dynamic part of the url typed

    res.sendFile(__dirname + "/index.html");
    res.send(
        `<h1> The word you typed after about/ was ${req.params.name}</h1>`
    );
});

app.get("/add-cute-animals", (req, res) => {
    // console.log(`GET /add-cute-animals route`);
    res.send(`<form method="POST">
     <input type="text" name="animal"
     placeholder="please type an animal"
     autocomplete="off">
     <input type="text" name="score"
     placeholder="score">
     <button>SUBMIT</button>
     </form>`);
});

app.post("/add-cute-animals", (req, res) => {
    // console.log("POST /add-cute-animals route");
    // console.log("req.body: ", req.body);
    // gives us access to user Input in the fields we provided

    res.send(`<h3>thanks for the submit</h3>
                <h3>animal: ${req.body.animal}</h3>
                <h3>score: ${req.body.score}</h3>`);
});

app.get("/super-secret-page", (req, res) => {
    if (req.cookies.authenticated) {
        res.send("<h1>HERE</h1>");
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => {
    console.log("express server running");
});
