(function (module) {
    var tweetsController = {};
    tweetsController.all = []; // stored tweets
    tweetsController.newest = [];

    tweetsController.init = function (callback) {
        if (tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }

        $.get('/collection/popular', function (data) {
            // tweetsController.all.push(data.objects.tweets);
            tweetsController.all.push(data);
            console.log(data);
            tweetView.init();
        });

        // add initial view render for index page
        callback();

    };

    tweetsController.newestTweets = function () {
        var tweetsArr = tweetsController.all[0];

        return tweetsArr.map(function (obj) {
            // console.log("Tweets arr obj: ", obj.tweets);
            reObj = {};
            reObj["text"] = obj.text;

            // the moment.js library converts the date string to a readable format
            reObj["date"] = moment(obj.created_at).format('MMMM Do YYYY, h:mm:ss a');

            return reObj;
        }).sort(function (a, b) {
            return a.date < b.date;
        });
    };

    tweetsController.popularTweets = function () {
        // this method turn an object of objects into an array
        var allTweets = tweetsController.all[0];
        var tweetsArr = Object.keys(
            allTweets).map(
            function (key) {
                return allTweets[key];
            });

        return tweetsArr.map(function (obj) {
            // console.log("Tweets arr obj: ", obj.tweets);
            reObj = {};
            reObj["text"] = obj.text;
            reObj["retweets"] = obj.retweet_count;
            // the moment.js library converts the date string to a readable format
            reObj["date"] = moment(obj.created_at).format('MMMM Do YYYY, h:mm:ss a');

            return reObj;
        }).sort(function (a, b) {
            return a.retweets < b.retweets;
        });
    };

    module.tweetsController = tweetsController;
})(window);
