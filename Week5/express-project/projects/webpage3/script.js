(function() {
    var hamburger = document.getElementById("menu");
    var hm = document.getElementById("hamburger-menu");
    var closingX = document.getElementById("x");
    var body = document.querySelector("body");
    var sideMenu = document.getElementById("menu-side");

    hamburger.addEventListener("click", function() {
        event.stopPropagation();
        hm.classList.add("on");
        sideMenu.classList.add("onscreen");
    });

    closingX.addEventListener("click", function() {
        event.stopPropagation();
        hm.classList.remove("on");
    });

    body.addEventListener("click", function() {
        hm.classList.remove("on");
    });

    sideMenu.addEventListener("click", function() {
        event.stopPropagation();
    });

    $("#dialog").css({
        backgroundColor: "rgba(0, 0, 0, 0.425)",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "grid",
        "grid-template-columns": "repeat(3, 1fr)",
        "grid-template-rows": "repeat(3, 1fr)",
        visibility: "hidden"
    });

    $("#smallDialog").css({
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        gridRow: "2 / 3",
        gridColumn: "2 / 3"
    });

    $("#x2").css({
        position: "relative",
        left: "95%"
    });

    function dialogTimer() {
        $("#dialog").css({
            visibility: "visible"
        });
    }
    setTimeout(dialogTimer, 1000);

    $("#x2").on("click", function() {
        $("#dialog").css({
            visibility: "hidden"
        });
    });

    $("body").on("click", function() {
        $("#dialog").css({
            visibility: "hidden"
        });
    });
    $("#smallDialog").on("click", function() {
        event.stopPropagation();
    });
})();
