(function (module) {
    var tweetsController = {};
    tweetsController.all = []; // stored tweets
    var popularCollection = []; //stored tweets for top 5


    tweetsController.popular = function () {
        if (tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }


        $.get('/collection/popular', function (data) {
            tweetsController.all.push(data);
            console.log(data);
           // popularCollection = data;
           // console.log(popularCollection);
            // add initial view render for index page
            tweetView.popular(tweetsController.all[0]);
            top5View.popular(tweetsController.all[0]);
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
