console.log("Testing")


var Twit = require("./node_modules/twit");
var config = require("./config")

var T = new Twit(config);

var query = process.argv[2]

var tweetParam = {
     q: query, 
     count: 10 
}

var query = process.argv[2]


T.get('search/tweets', tweetParam, getData)


function getData(err, data, response) {
    var tweets = data.statuses
    for (var i=0; i < tweets.length; i++) {
        console.log(tweets[i].text)
        console.log(tweets[i].user.name)
    }
}