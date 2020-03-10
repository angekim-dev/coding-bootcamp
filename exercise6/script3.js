//Part 3:
var clickElement = document.getElementById("click-element");

clickElement.addEventListener("mouseup", function() {
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    clickElement.style.backgroundColor = randomColour;
});

clickElement.addEventListener("mousedown", function() {
    var r = getRandomColourNumber();
    var g = getRandomColourNumber();
    var b = getRandomColourNumber();
    var randomColour = "rgb(" + r + "," + g + "," + b + ")";
    clickElement.style.backgroundColor = randomColour;
});

function getRandomColourNumber() {
    return Math.floor(Math.random() * 256); //generates number between 0 and 255
}

// Make a page that has on it an element
// that is 100px by 100px in size
// and has a solid black border.
// When the user mouses down on this box,
// its background should change to a randomly selected color.
// When the user mouses up on it,
// its background should change to another randomly selected color.
