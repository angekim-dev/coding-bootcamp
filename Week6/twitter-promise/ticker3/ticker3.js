// don't forget to do your sanity check!
// console.log($);

(function () {
    $.ajax({
        url: "/ticker3.json",
        method: "GET",
        success: function (response) {
            // console.log("response: ", response);

            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                // console.log(response[i]);
                myHtml +=
                    "<a href='" +
                    response[i].href +
                    "'>" +
                    response[i].text +
                    "</a>";
            }
            var headlines = $("#headlines");
            headlines.html(myHtml);
            moveHeadlines();

            var left = headlines.offset().left; //returns the number of pixels
            //that the upper left corner of the current element is offset to the left

            var anim;

            function moveHeadlines() {
                left--;
                if (left < -$("#headlines a").eq(0).outerWidth()) {
                    left += $("#headlines a").eq(0).outerWidth(); //add the width of the first link
                    //to the new left
                    $("#headlines a")
                        .eq(0)
                        .parent()
                        .append($("#headlines a").eq(0));
                }
                headlines.css({
                    left: left + "px",
                });
                // move the element to the new left position

                anim = requestAnimationFrame(moveHeadlines);
            }

            for (var i = 0; i < headlines.length; i++) {
                $(headlines.eq(i)).on("mouseover", function (e) {
                    // console.log("over");
                    cancelAnimationFrame(anim);
                    $(e.target).css({
                        color: "blue",
                    });
                    $(e.target).css({
                        decoration: "underline",
                    });
                });
                $(headlines.eq(i)).on("mouseout", function (e) {
                    moveHeadlines();
                    $(e.target).css({
                        color: "",
                    });
                    $(e.target).css({
                        decoration: "",
                    });
                });
            }
        },
        error: function (err) {
            console.log("err: ", err);
        },
    });
})(); // invoke your iife!
