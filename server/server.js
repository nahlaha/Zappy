var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var twitter = require('./modules/twitter');
var mongodb = require('./modules/mongodb');
var port = 8080;
app.use(bodyParser.json())

app.post('/slack', (req, res) => {
    var msg = req.body.event ? req.body.event.text : '';
    res.end(req.body.challenge);
    //var regex = new RegExp('.go.');
    var wordGo = msg.search('go');
    if (wordGo >= 0) {
        twitter.getTweets((alltweets) => {
            mongodb.insert(alltweets, (err, count) => {
                // console.log('error=', err);
                // console.log('count=', conut)
                //count number of inserted rows
            })
        });
    }
});

app.get('/tweets', (req, res) => {
    mongodb.getAll((allTweets) => {
        res.json(allTweets);
    })
})
app.listen(port);
module.exports = app;