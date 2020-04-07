const express = require("express");
const app = express();
let { getToken, getTweets, filterTweets } = require("./twitter.js");
const { promisify } = require("util");
getToken = promisify(getToken);
getTweets = promisify(getTweets);

app.use(express.static("./ticker3"));

app.get("/ticker3.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            return Promise.all([
                getTweets(bearerToken, "Drake"),
                getTweets(bearerToken, "Beyonce"),
                getTweets(bearerToken, "taylorswift13"),
            ])
                .then((result) => {
                    // const drake = result[0];
                    // const beyonce = result[1];
                    // const taylor = result[2];
                    const [drake, beyonce, taylor] = result;
                    const mergedResults = drake.concat(beyonce, taylor);
                    // OR const mergedResults == [...drake, ...beyonce, ...taylor];
                    console.log("mergedResults:", mergedResults);
                    const sortedTweets = mergedResults.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const filteredTweets = filterTweets(sortedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => console.log("err:", err));
        })
        .then((results) => {
            console.log(results);
        })
        .catch((err) => {
            console.log("err in catch", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("twitter ticker up"));

// getToken().then(
//     token => getTweets (token)
// ).then (tweets =>{

// }).catch(
//     err => {
//         console.log(err);
//         res.sendStatus(500);
//     }
// );
