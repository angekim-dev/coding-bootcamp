//Part 4:

var innerSquare = document.getElementById("inner");
var outerSquare = document.getElementById("outer");

function getRandomColourNumber() {
    return Math.floor(Math.random() * 256); //generates number between 0 and 255
}

outerSquare.addEventListener("click", function() {
    // console.log("clicked");
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    outerSquare.style.backgroundColor = randomColour;
});

innerSquare.addEventListener("click", function(event) {
    // console.log("clicked");
    event.stopPropagation();
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    innerSquare.style.backgroundColor = randomColour;
});

// Make a page that has on it an element
// that is 200px by 200px in size
// and has a solid background color.
// When the user clicks on the outer element
// its background color should change
// to a randomly selected color.
// Nest within that element another element
// that is 50px by 50px in size
// and has a different solid background color.
// However, if the user clicks on the inner element,
// the inner element's background color should change
// to a randomly selected background color
// but the outer element's background color
// should not change at all.
