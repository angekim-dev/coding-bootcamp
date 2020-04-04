const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./projects.json");
// console.log(projects);
//You will need to require this json file in your index.js, in order to then pass it to the template for use.

//setting handlebars as the view engine
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./projects")); //static files from directory available if requested
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        projects,
    });
});

app.get("/:project/description", (req, res) => {
    const project = req.params.project;
    const selectedProject = projects.find((item) => item.directory == project);
    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            projects,
            selectedProject,
        });
    }
});

app.listen(8080, () => console.log("server listening"));
