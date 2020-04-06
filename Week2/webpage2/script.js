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
})();
