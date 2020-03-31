// module.exports.generateHtml = (req, res) => {
const fs = require("fs");
// will do fs stuff
function readContents(path) {
    const items = fs.readdirSync(path);
    //flow is blocked until the whole file is read
    console.log(items);
    // for (const item of items) {
    //     const itemName = item.name;
    //     if (item.isFile() == true) {
    //         console.log(item.name);
    //     } else if (item.isDirectory() == true) {
    //         console.log("directory");
    //     }
    // }
    //do it al
    // console.log(items.name, item.isFile(), item.isDirectory());
}
readContents(__dirname + "/projects/panes");
//flow is blocked until the whole file is read

// loop through array that fs.readdirSync return
return "<h1>MyPortfolio</h1>";
// };
// Create a page that lists
// and links to all of the projects in your portfolio.

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
