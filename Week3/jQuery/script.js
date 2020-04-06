(function() {
    var h1 = $("h1");
    h1.css({
        color: "red",
        background: "purple",
        "margin-left": "100px"
    });
    $(".text")
        .css({
            "font-size": "50px",
            fontWeight: "bold",
            "letter-spacing": "25px",
            background: "violet"
        })
        .html("replace html completely!!");
    $(".text").on("click", function clickOnPTag(e) {
        console.log("event object: ", e);
        $(e.target).css({
            background: "black"
        });
        $(e.target).off("click", clickOnPTag);

        console.log($(e.target).outerWidth());
    });
})();
