(function (module) {
    var tweetsController = {};
    tweetsController.all = [];
    tweetsController.newest = [];

    tweetsController.init = function (callback) {
        if (tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }

        $.get('/collection', function (data) {
            console.log(data);
            tweetsController.all.push(data.objects);
        });

        // add initial view render for index page
        callback();
    };

    // tweetsController.newestTweets = function () {
    //     // this method turn an object of objects into an array
    //     var tweetsArr = Object.keys(
    //         tweetsController.all[0].tweets).map(
    //         function (key) {
    //             return tweetsController.all[0].tweets[key];
    //         });
    // };

    tweetsController.newest = tweetsController.all.map(function (obj) {
        // console.log("Tweets arr obj: ", obj);
        reObj = {};
        reObj["text"] = obj.text;
        reObj["date"] = obj.created_at;
        return reObj;
    });

    tweetsController.with = function (attr) {
        return tweetsController.all[0].tweets.filter(function (tweetObj) {
            return tweetObj[attr];
        });
    };

    module.tweetsController = tweetsController;
})(window);
