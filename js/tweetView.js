(function (module) {
    var tweetView = {};

    var render = function (data) {
        var template = Handlebars.compile($('#tweetTemplate').text());

        return template(data);
    };

    tweetView.newest = function () {

        var newTweets = tweetsController.newestTweets();
        console.log("New Tweets var: ", newTweets);
        $('#tweetsPoolNew').append(
            newTweets.map(render)
        )
    };

    tweetView.popular = function () {
      var popularTweets = tweetsController.popularTweets();
        $('#tweetsPoolPopular').append(
            popularTweets.map(render)
        )
    };
    module.tweetView = tweetView;
})(window);