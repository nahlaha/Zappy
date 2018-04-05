var Twitter = require('twitter')
exports.getTweets = function(callback) {
    var twitter = new Twitter({
        consumer_key: '4h2LEo18cegtowcu0MgfTUkgP',
        consumer_secret: '9PaOfVdwZkUqqT6T2xPEvWYtBXUrMdzWPAR5UbOg4gZj1NntFe',
        access_token_key: '979097334079541249-GIL4Jso9Fr2RZhJld1ICgjZ7XQbaPs9',
        access_token_secret: '1q1Ufb6Mmxx55wr9CXgV8DsGrM77kURhb1XTNaAuZVpcx'
    });
    var allTweets = [];
    twitter.get('statuses/user_timeline', { screen_name: 'FictionFoneGP' },
        function(error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {
                    var date = tweets[i].created_at
                    var formattedDate = date.replace("+0000", " ")
                    allTweets.push({
                        "_id": tweets[i].id_str,
                        "text": tweets[i].text,
                        "date": formattedDate

                    });
                }
            }
            callback(allTweets)
        });
}