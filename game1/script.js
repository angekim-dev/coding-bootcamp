var board = document.getElementsByClassName("board")[0];
var racers = document.getElementsByClassName("racer");
console.log("board: ", board);

var leftRacingCar = 0; // can be changed to array
var leftMotorbike = 0;
var leftPoliceCar = 0;
var leftTractor = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 51);
}

function getRandomColourNumber() {
    return Math.floor(Math.random() * 256); //generates number between 0 and 255
}

board.addEventListener("click", function() {
    console.log("clicked");
    leftRacingCar += getRandomNumber();
    leftMotorbike += getRandomNumber();
    leftPoliceCar += getRandomNumber();
    leftTractor += getRandomNumber();
    console.log("lefttractor", leftTractor);
    console.log("leftbike", leftMotorbike);
    racers[0].style.left = leftRacingCar + "px"; //can be changed to loop
    racers[1].style.left = leftMotorbike + "px";
    racers[2].style.left = leftPoliceCar + "px";
    racers[3].style.left = leftTractor + "px";
});

document.getElementById("boost-button").addEventListener("click", function(e) {
    console.log("clicked on boost");
    e.stopPropagation();
    leftRacingCar += 100;
    // leftMotorbike = 0;
    // leftPoliceCar = 0;
    // leftTractor = 0;
    racers[0].style.left = leftRacingCar + "px";
});

document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 32) {
        var r = getRandomColourNumber();
        var g = getRandomColourNumber();
        var b = getRandomColourNumber();
        var randomColour = "rgb(" + r + "," + g + "," + b + ")";
        console.log("randomColour: ", randomColour);
        board.style.backgroundColor = randomColour;
    }
});
