(function (module) {
    var tweetView = {};

    var render = function (data) {
        var template = Handlebars.compile($('#tweetTemplate').text());

        return template(data);
    };

    tweetView.init = function () {
        var newTweets = tweetsController.newestTweets();
        console.log("New Tweets var: ", newTweets);
        $('#tweetsPool').append(
            newTweets.map(render)
        );
    };

    module.tweetView = tweetView;
})(window);
