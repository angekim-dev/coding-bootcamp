(function() {
    var input = $("input");
    var resultsElem = $(".results");

    input.on("input", function() {
        var val = input.val();
        $.ajax({
            url: "http://spicedworld.herokuapp.com/",
            method: "GET",
            data: {
                q: val
            },
            success: function(matches) {
                // console.log("response: ", matches);

                if (val == "") {
                    resultsElem.empty();
                    return;
                }
                var resultsHtml = "";
                for (var j = 0; j < matches.length; j++) {
                    resultsHtml +=
                        '<div class ="results">' + matches[j] + "</div>";
                }
                resultsElem.html(resultsHtml);
                //timing issue

                if (resultsHtml == "") {
                    // console.log("nope");
                    resultsElem.html("No results");
                }
                if (val == "") {
                    resultsElem.empty();
                    return;
                }
            }
        });
    });

    resultsElem.on("mouseover", function(e) {
        // console.log($(".results"));
        // console.log(resultsElem);
        $(e.target).addClass("highlight");
        resultsElem.on("mouseout", function(e) {
            $(e.target).removeClass("highlight");
        });
    });

    resultsElem.on("mousedown", function(event) {
        input.val($(event.target).html());
        resultsElem.empty();
    });

    // where problem??
    input.on("keydown", function(ev) {
        var highlight = $(".highlight");
        if (ev.keyCode == 40) {
            // console.log("down");
            // console.log(highlight.length);
            // console.log(resultsElem);
            if (highlight.length == 0) {
                resultsElem.first().addClass("highlight");
                return;
            }
            if (highlight.length == 1) {
                highlight.next().addClass("highlight");
                highlight.prev().removeClass("highlight");
            }
        }
        if (ev.keyCode == 38) {
            // console.log("up");
            if (highlight.length == 0) {
                resultsElem.last().addClass("highlight");
                return;
            }
            if (highlight.length == 1) {
                highlight.prev().addClass("highlight");
                highlight.next().removeClass("highlight");
            }
        }
        if (ev.keyCode == 13) {
            input.val(highlight).html();
            resultsElem.empty();
        }
    });

    // input.on("focus", function(e) {
    //     input.trigger("input");
    // });
})();
