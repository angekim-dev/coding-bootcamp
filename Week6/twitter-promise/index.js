const express = require("express");
const app = express();
let { getToken, getTweets, filterTweets } = require("./twitter.js");
const { promisify } = require("util");
getToken = promisify(getToken);
getTweets = promisify(getTweets);

app.use(express.static("./ticker3"));

app.get("/ticker3.json", (req, res) => {
    // console.log("JSON");
    getToken().then((bearerToken) => {
        // console.log(bearerToken);
        return Promise.all([
            getTweets(bearerToken, "Missy_Magazine"),
            getTweets(bearerToken, "derfreitag"),
            getTweets(bearerToken, "katie_willcox"),
        ])
            .then((result) => {
                // const drake = result[0];
                // const beyonce = result[1];
                // const taylor = result[2];
                const mergedResults = [
                    ...result[0],
                    ...result[1],
                    ...result[2],
                ];
                // OR const mergedResults == [...drake, ...beyonce, ...taylor];
                // console.log("mergedResults:", mergedResults);
                const sortedTweets = mergedResults.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                return sortedTweets;
            })
            .then((sortedTweets) => {
                return filterTweets(sortedTweets);
            })
            .then((filteredTweets) => {
                res.json(filteredTweets);
            })
            .catch((err) => console.log("err:", err));
    });
});

app.listen(8080, () => console.log("twitter ticker up"));
