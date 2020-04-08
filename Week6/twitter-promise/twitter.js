const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets.json");

module.exports.getToken = (callback) => {
    // this function gets the bearerToken from twitter

    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");

    const optionsToken = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    const cbToken = function (responseToken) {
        return new Promise((resolve, reject) => {
            if (responseToken.statusCode != 200) {
                // console.log("responseToken.statusCode ", responseToken.statusCode);
                callback(responseToken.statusCode);
                return;
            }
            let body = "";
            responseToken.on("data", (chunk) => {
                body += chunk;
            });

            responseToken.on("end", () => {
                let parsedBody = JSON.parse(body);
                // console.log("parsedBody ...", parsedBody);
                callback(null, parsedBody.access_token);
            });
        });
    };

    const reqToken = https.request(optionsToken, cbToken);

    reqToken.end("grant_type=client_credentials");
};

module.exports.getTweets = (bearerToken, maybeHere, callback) => {
    //similar to above
    // this function gets the tweets from twitter api

    const optTweets = {
        method: "GET",
        // screen_name: "Missy_Magazine",
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?screen_name=${maybeHere}&tweet_mode=extended`,
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };

    const cbTweets = function (resTweets) {
        if (resTweets.statusCode != 200) {
            // console.log("resTweets.statusCode: ", resTweets.statusCode);
            callback(resTweets.statusCode);
            return;
        }
        let bodyTweets = "";
        resTweets.on("data", (chunk) => {
            bodyTweets += chunk;
        });
        resTweets.on("end", () => {
            let tweets = JSON.parse(bodyTweets);
            // console.log("tweets ...", tweets);
            callback(null, tweets);
        });
    };
    const reqTweets = https.request(optTweets, cbTweets);
    reqTweets.end();
};

module.exports.filterTweets = (tweets) => {
    // filters the response we get from twitter api
    // no asynchronous behaviour
    // for loops, filtering, mapping, everyday js, no callback
    let tweetArray = [];
    for (let i = 0; i < tweets.length; i++) {
        let href = "";
        if (tweets[i].entities.urls.length === 1) {
            href = tweets[i].entities.urls[0].url;
            // console.log(url);
        }
        let tickerText =
            "*" + tweets[i].user.screen_name + "* " + tweets[i].full_text;
        // console.log(tickerText);
        let text = tickerText.substring(0, 50) + "...";
        // console.log(runningText, url);
        tweetArray.push({ href, text });
        console.log(tweetArray);
    }
    return tweetArray;
};
