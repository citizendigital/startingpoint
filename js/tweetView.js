(function (module) {
    var tweetView = {};

    var render = function (data) {
        var template = Handlebars.compile($('#tweetTemplate').text());

        return template(data);
    };

    tweetView.newest = function (data) {
        $("#tweetsPoolPopular").fadeOut(300);
        $('#tweetsPoolNew').append(
            data.map(render)
        ).delay(100).fadeIn(300);
    };

    tweetView.popular = function (data) {
        $("#tweetsPoolNew").fadeOut(300);
        $('#tweetsPoolPopular').append(
            data.map(render)
        ).delay(100).fadeIn(300);
    };

    module.tweetView = tweetView;
})(window);
