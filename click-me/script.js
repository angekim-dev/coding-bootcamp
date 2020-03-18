var btn = document.getElementById("btn");

var inputField = document.querySelector("input");

btn.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 66) {
        console.log("keydown happened", event);
        document.body.style.backgroundColor = "hotpink";
    }
});

inputField.addEventListener("input", function(e) {
    console.log("input event", e.currentTarget.value);
    e.target.value = "MSG!";
});
