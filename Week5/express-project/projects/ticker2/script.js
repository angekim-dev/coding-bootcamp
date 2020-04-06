(function() {
    var headlines = $("#headlines");
    var links = $("#headlines a");

    var left = headlines.offset().left; //returns the number of pixels
    //that the upper left corner of the current element is offset to the left

    var anim;

    moveHeadlines();

    function moveHeadlines() {
        left--;
        if (left < $(-links.eq(0)).outerWidth()) {
            left += $(links.eq(0)).outerWidth(); //add the width of the first link
            //to the new left
            $(links.eq(0))
                .parent()
                .append(links[0]);
        }
        headlines.css({
            left: left + "px"
        });
        // move the element to the new left position

        anim = requestAnimationFrame(moveHeadlines);
    }

    for (var i = 0; i < links.length; i++) {
        $(links.eq(i)).on("mouseover", function(e) {
            cancelAnimationFrame(anim);
            $(e.target).css({
                color: "blue"
            });
            $(e.target).css({
                decoration: "underline"
            });
        });
        $(links.eq(i)).on("mouseout", function(e) {
            moveHeadlines();
            $(e.target).css({
                color: ""
            });
            $(e.target).css({
                decoration: ""
            });
        });
    }
})();
