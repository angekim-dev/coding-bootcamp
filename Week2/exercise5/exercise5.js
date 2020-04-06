function changeStyle(selector) {
    var element = document.querySelectorAll(selector);
    for (var i = 0; i < element.length; i++) {
        element[i].style.fontStyle = "italic";
        element[i].style.textDecoration = "underline";
        element[i].style.fontWeight = "bold";
    }
}

//Test:
// changeStyle("#first-task");

// Write a function
// that expects a string representing a selector to be passed as a parameter.
// The function should find all the elements in the document
// that match the selector
// and change their style so that the text they contain is
// italic, underlined, and bold.

function returnArray(classStr) {
    var elements = document.getElementsByClassName(classStr);
    var arrayElem = [];
    for (var i = 0; i < elements.length; i++) {
        arrayElem.unshift(elements[i]);
    }
    return arrayElem;
}

//Test:
// returnArray("second-task");
// also test:
// console.log(Array.isArray(returnArray("second-task")));

// Write a function
// that expects a string representing a class name to be passed as a parameter.
// The function should return an array
// containing all the elements in the document
// that have the class that was passed in.

function insertingFunction() {
    var newSection = document.createElement("section");
    var insertingText = document.createTextNode("AWESOME");
    newSection.appendChild(insertingText);
    document.body.appendChild(newSection);

    newSection.style.position = "fixed";
    newSection.style.zIndex = "2147483647";
    newSection.style.fontSize = "200px";
    newSection.style.left = "20px";
    newSection.style.top = "100px";
}

// Test:
// insertingFunction();

// Write a function
// that inserts an element into the body of the currently loaded page.
// That element should have fixed position, z-index of 2147483647,
// left of 20px, top of 100px,
// font-size of 200px,
// and contain the text 'AWESOME'.
