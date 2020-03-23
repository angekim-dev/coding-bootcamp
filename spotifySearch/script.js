(function() {
    // console.log ($);

    $("#submit-button").on("click", function() {
        var userInput = $("input[name=user-input]").val(); //value which the user is typing in
        var dropdownSelectVal = $("select").val(); //artist or album
        var baseUrl = " https://elegant-croissant.glitch.me/spotify"; //url to make our request to

        $("#results-for").append("<h2>Results for " + userInput + "</h2>");

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
                var myHtml = "";
                var imgUrl = "/default.jpg";
                //loop over the response items
                for (var i = 0; i < response.items.length; i++) {
                    // console.log("response.items[i]", response.items[i]);
                    // console.log("name of item", response.items[i].name);
                    //check if the item that we are currently looping over has images
                    if (response.items[i].images[0]) {
                        imgUrl = response.items[i].images[0].url;
                    }
                    myHtml +=
                        "<div><h3><a href='" +
                        response.items[i].external_urls.spotify +
                        "'>" +
                        response.items[i].name +
                        "</a></h3><a href='" +
                        response.items[i].external_urls.spotify +
                        "'><img src='" +
                        imgUrl +
                        "'></a></div>";
                }
                $("#results-container").html(myHtml);
                var nextUrl =
                    response.next && //only if response.next exists
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "elegant-croissant.glitch.me/spotify"
                    ); //takes 2 arguments, first the pattern that you want to replace, second what you want to replace it with
                // console.log(nextUrl);
                if (nextUrl === 0) {
                    $("#more").hide();
                } else {
                    // make another ajax request, when the more button is clicked!!
                    $("#more").on("click", function() {
                        // console.log("click");
                        // console.log("response.next:", response.next);
                        $.ajax({
                            //send this to our proxy
                            url: nextUrl,
                            method: "GET",
                            success: function(response) {
                                response = response.albums || response.artists;
                                for (
                                    var i = 0;
                                    i < response.items.length;
                                    i++
                                ) {
                                    if (response.items[i].images[0]) {
                                        imgUrl =
                                            response.items[i].images[0].url;
                                    }
                                    myHtml +=
                                        "<div><h3><a href='" +
                                        response.items[i].external_urls
                                            .spotify +
                                        "'>" +
                                        response.items[i].name +
                                        "</a></h3><a href='" +
                                        response.items[i].external_urls
                                            .spotify +
                                        "'><img src='" +
                                        imgUrl +
                                        "'></a></div>";
                                }
                                $("#results-container").html(myHtml);
                            }
                        });
                    });
                }
            }
        });
    });
})();
