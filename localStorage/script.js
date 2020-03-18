(function() {
    var textArea = $("textarea");
    var submit = $("#submit");
    var reveal = $("#reveal");

    textArea.on("input", function(e) {
        var character = e.target;
        submit.on("mousedown", function() {
            // console.log("click");
            localStorage.setItem("secret", character.value);
            console.log(localStorage.getItem("secret"));
        });
        submit.on("mouseup", function() {
            textArea.val("");
        });
    });
    reveal.on("click", function() {
        textArea.val(localStorage.getItem("secret"));
    });
})();

// Make a static HTML page
// that has a large <textarea> on it.
// When the user types in it, save the value in localStorage.
// When the user comes back to the page
// after navigating away or closing the browser,
// the stored value should automatically appear in the <textarea>.
