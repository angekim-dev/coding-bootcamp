(function() {
    // console.log ($);
    var nextUrl;
    var results = $("#results-container");

    $("#submit-button").on("click", function() {
        var userInput = $("input[name=user-input]").val(); //value which the user is typing in
        var dropdownSelectVal = $("select").val(); //artist or album
        var baseUrl = "https://elegant-croissant.glitch.me/spotify"; //url to make our request to

        $.ajax({
            //send this to our proxy
            url: baseUrl,
            method: "GET",
            // data we need to send along in our request
            data: {
                query: userInput,
                type: dropdownSelectVal //to make valid get request -> the information spotify needs, normally needs to be read in documentation
            },
            success: function(response) {
                response = response.albums || response.artists; //returns object, with array items with interesting information
                if (response.items.length == 0) {
                    $("#results-for").html(
                        '<div id="results-for">No results found for "' +
                            userInput +
                            '"</div>'
                    );
                } else {
                    $("#results-for").html(
                        '<div id="results-for">Results for "' +
                            userInput +
                            '"</div>'
                    );
                }

                results.html(getResultsHtml(response.items));
                setNextUrl(response);

                infiniteScroll();
            }
        });
    });

    $("input, select").on("keydown", function(event) {
        if (event.keyCode === 13) {
            $("#submit-button").trigger("click");
        }
    });

    function setNextUrl(response) {
        var nextUrl =
            response.next && //only if response.next exists
            response.next.replace(
                "api.spotify.com/v1/search",
                "elegant-croissant.glitch.me/spotify"
            );
        return nextUrl;
    }

    function getMoreResults(nextUrl) {
        $("#more").on("click", function() {
            // console.log("click");
            // console.log("response.next:", response.next);
            $.ajax({
                //send this to our proxy
                url: nextUrl,
                method: "GET",
                success: function(response) {
                    response = response.albums || response.artists;

                    results.append(getResultsHtml(response.items));
                    setNextUrl(response);
                    infiniteScroll();
                }
            });
        });
    }
    function getResultsHtml(items) {
        var myHtml = "";
        var imgUrl = "default.jpg";
        for (var i = 0; i < items.length; i++) {
            // console.log("response.items[i]", response.items[i]);
            // console.log("name of item", response.items[i].name);
            //check if the item that we are currently looping over has images
            if (items[i].images[0]) {
                imgUrl = items[i].images[0].url;
            }
            myHtml +=
                "<div><h3><a href='" +
                items[i].external_urls.spotify +
                "'>" +
                items[i].name +
                "</a></h3><a href='" +
                items[i].external_urls.spotify +
                "'><img src='" +
                imgUrl +
                "'></a></div>";
        }
        return myHtml;
    }
    function infiniteScroll(response) {
        var hasReachedBottom = $(window).height() + $(document).scrollTop();
        if (location.search == "?scroll=infinite") {
            if (hasReachedBottom == $(document).height()) {
                getMoreResults(nextUrl);
            } else {
                setTimeout(infiniteScroll, 500);
            }
        }
    }
})();
