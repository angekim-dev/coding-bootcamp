(function() {
    var headlines = document.getElementById("headlines");
    var links = headlines.getElementsByTagName("a");

    var left = headlines.offsetLeft; //returns the number of pixels
    //that the upper left corner of the current element is offset to the left

    var anim;

    moveHeadlines();

    function moveHeadlines() {
        left--;
        if (left < -links[0].offsetWidth) {
            left += links[0].offsetWidth; //add the width of the first link
            //to the new left
            links[0].parentNode.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        // move the element to the new left position

        anim = requestAnimationFrame(moveHeadlines);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function(e) {
            cancelAnimationFrame(anim);
            e.target.style.color = "blue";
            e.target.style.decoration = "underline";
        });
        links[i].addEventListener("mouseout", function(e) {
            moveHeadlines();
            e.target.style.color = "";
            e.target.style.decoration = "";
        });
    }
})();
