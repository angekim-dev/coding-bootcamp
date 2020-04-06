// Make a page that has on it an element
//that is 100px by 100px in size,
//has absolute positioning,
//and has a solid background color.
var movingElement = document.getElementById("moving-element");
var x = 0;
var y = 0;

document.addEventListener("mousemove", function(e) {
    x = e.pageX - 50;
    y = e.pageY - 50;
    movingElement.style.transform = "translate" + "(" + x + "px, " + y + "px)";
});

//Add an event handler
//that makes this box center itself
//directly under the user's mouse pointer
//as it is moved across the screen.
