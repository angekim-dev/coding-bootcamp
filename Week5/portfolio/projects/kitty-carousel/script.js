(function() {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.querySelectorAll("#dots .dot");
    var currentCat = 0;
    var timer;
    var isTransitioning = false;

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", clickHandler(i));
    }

    function clickHandler(dotIndex) {
        return function() {
            if (isTransitioning || dotIndex == currentCat) {
                return;
            }
            clearTimeout(timer);
            moveKitties(dotIndex);
        };
    }

    function moveKitties(index) {
        console.log("index: ", index);

        kitties[currentCat].classList.remove("onscreen");
        dots[currentCat].classList.remove("on");
        kitties[currentCat].classList.add("offscreen-left");

        if (typeof index === "number") {
            currentCat = index;
        } else {
            currentCat++;
        }

        if (currentCat > kitties.length - 1) {
            currentCat -= kitties.length;
        }

        kitties[currentCat].classList.add("onscreen");
        dots[currentCat].classList.add("on");
        isTransitioning = true;
    }

    document.addEventListener("transitionend", function(e) {
        if (e.target.className == "offscreen-left") {
            e.target.classList.remove("offscreen-left");
            isTransitioning = false;
            timer = setTimeout(moveKitties, 3000);
        }
    });

    timer = setTimeout(moveKitties, 3000);
})();
