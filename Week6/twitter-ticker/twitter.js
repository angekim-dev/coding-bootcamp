const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets.json");

module.exports.getToken = (callback) => {
    // this function gets the bearerToken from twitter

    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    const cb = function (response) {
        if (response.statusCode != 200) {
            console.log("response.statusCode ", response.statusCode);
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            let parsedBody = JSON.parse(body);
            console.log("body response from twitter ...", parsedBody);
            callback(null, parsedBody.access_token);
        });
    };

    const req = https.request(options, cb);

    req.end("grant_type=client_credentials");
};

module.exports.getTweets = (bearerToken, callback) => {
    //similar to above
    // this function gets the tweets from twitter api

    const opt = {
        method: "GET",
        screen_name: "Missy_Magazine",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=Missy_Magazine&tweet_mode=extended",
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };

    const cbTweets = function (res) {
        if (res.statusCode != 200) {
            console.log("*****res.statusCode: ", res.statusCode);
            callback(res.statusCode);
            return;
        }
        let bodyTweets = "";
        res.on("data", (chunk) => {
            bodyTweets += chunk;
        });
        res.on("end", () => {
            let parsedBodyTweets = JSON.parse(bodyTweets);
            console.log(
                "*****body response from twitter ...",
                parsedBodyTweets
            );
            callback(null, parsedBodyTweets);
        });
    };
    const req = https.request(opt, cbTweets);
    req.end();
};

module.exports.filterTweets = (tweets) => {
    // filters the response we get from twitter api
    // no asynchronous behaviour
    // for loops, filtering, mapping, everyday js, no callback
};
