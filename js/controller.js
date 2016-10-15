(function (module) {
    var tweetsController = {};
    tweetsController.all = []; // stored tweets
    tweetsController.newest = [];

    tweetsController.init = function (callback) {
        if (tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }

        $.get('/collection', function (data) {
            tweetsController.all.push(data.objects.tweets);
            console.log(data.objects.tweets);
            tweetView.init();
        });

        // add initial view render for index page
        callback();
    };

    tweetsController.newestTweets = function () {
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

            // the moment.js library converts the date string to a readable format
            reObj["date"] = moment(obj.created_at).format('MMMM Do YYYY, h:mm:ss a');

            return reObj;
        }).sort(function(a, b){
            return a.date < b.date;
        });
    };

    tweetsController.with = function (attr) {
        return tweetsController.all[0].tweets.filter(function (tweetObj) {
            return tweetObj[attr];
        });
    };

    module.tweetsController = tweetsController;
})(window);
