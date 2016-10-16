(function (module) {
    var tweetsController = {};
    tweetsController.all = []; // stored tweets

    tweetsController.popular = function () {
        if (tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }

        $.get('/collection/popular', function (data) {
            tweetsController.all.push(data);
            console.log(data);

            // add initial view render for index page
            tweetView.popular(tweetsController.all[0]);
        });
    };

    tweetsController.recent = function () {
        if (tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }

        $.get('/collection/recent', function (data) {
            tweetsController.all.push(data);

            // add initial view render for index page
            tweetView.newest(tweetsController.all[0]);
        });
    };

    module.tweetsController = tweetsController;
})(window);
