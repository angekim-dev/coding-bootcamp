(function() {
    var textArea = $("textarea");
    var validate = $("button");

    textArea.on("input", function() {
        validate.on("mousedown", function() {
            // console.log("mousedown");
        });
        validate.on("mouseup", function() {
            // console.log("mouseup");
            try {
                JSON.parse(textArea.val());
                textArea.val("This is a JSON");
            } catch (error) {
                textArea.val("This is NOT a JSON");
            }
        });
    });
})();
