const fs = require("fs");
module.exports.generateHtml = () => {
    //export outside of the current module
    // will do fs stuff

    const items = fs.readdirSync(__dirname + "/projects/", {
        withFileTypes: true
    });
    //flow is blocked until the whole file is read

    let siteHtml = `<!DOCTYPE html>
        <title>Portfolio of my work</title>
        <h1>Portfolio</h1>
        <ul>`;
    for (const item of items) {
        if (item.isDirectory() == true) {
            // console.log("directory");
            siteHtml +=
                "<li><a href='/" + item.name + "'>" + item.name + "</a></li>";
        }
    }
    return siteHtml + `</ul>`;
};

// Create a module to generate the projects page.
// This module should require fs
// and use it to read the contents of the projects directory
// and build a list of links
// and link text to put into html.
// The link href can be to the project directory
// and the link text can just be the name of the directory
// containing the project.
// Finally, this module should add to its exports a method
// that returns the html string it created.

// Your main module should
// require the module that generates the project page HTML
// and write the string returned by the function it exposes
// to the response if the request's url property equals '/'.
