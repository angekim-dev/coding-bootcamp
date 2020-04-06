const express = require("express");
const app = express();
const { getToken } = require("./twitter.js");

app.use(express.static("./ticker3"));

app.get("/ticker3.json", (req, res) => {
    console.log("need to serve some JSON!");

    // 1. get the bearerToken from twitter

    getToken(function (err, bearerToken) {
        if (err) {
            console.log("error in getToken", err);
            return;
        }
        console.log("in index.js the bearerToken is", bearerToken);
        // 2. use it to get tweets
        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("error in getTweets", err);
                return;
            }

            // 3. filter tweets
            const filteredTweets = filteredTweets(tweets);
            // 4. send back a response (i.e. res.json(filteredTweets))
            res.json(filteredTweets);
        });
    });

    // getToken(function logToken(token) {
    //     console.log("I need a token to do sth", token);
    // });
});

app.listen(8080, () => console.log("twitter ticker up"));
