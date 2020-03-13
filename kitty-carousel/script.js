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
            if (isTransitioning === true) {
                //if the transition is happening -> do nothing
                return;
            }
            clearTimeout(timer);
            moveKitties(dotIndex);
        }; /*what should happen when event happens*/
    }

    function moveKitties(index) {
        console.log("index: ", index);

        kitties[currentCat].classList.remove("onscreen");
        kitties[currentCat].classList.add("offscreen-left");

        if (typeof index === "number") {
            //if-else block location matters!!
            //user clicked a dot, something must happen
            currentCat = index;
        } else {
            // user didn't touch it, let the carousel run on its own
            currentCat++;
        }

        if (currentCat > kitties.length - 1) {
            currentCat -= kitties.length;
        }

        kitties[currentCat].classList.add("onscreen"); //task: find out how to make it work without writing several functions
        // currentCat++;
        // console.log(currentCat);
        // timer = setTimeout(moveKitties, 3000); // might leave screen empty first, but transitionend will fix it
    }

    document.addEventListener("transitionend", function(e) {
        if (e.target.className == "offscreen-left") {
            e.target.classList.remove("offscreen-left");
            timer = setTimeout(moveKitties, 3000);
        }
        // console.log(e.target);
        // will be triggered whenever a transition finishes
        // including transition from onscreen to offscreen left
        // makes the carousel run forever
    });

    timer = setTimeout(moveKitties, 3000);
})();
