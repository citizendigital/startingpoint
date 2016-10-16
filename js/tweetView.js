(function (module) {
    var tweetView = {};

    var render = function (data) {
    Handlebars.registerHelper('wrapURL', function(str) {
        str = Handlebars.Utils.escapeExpression(str);

        var matches = str.match(/http\S+/);

        if(matches) {
            var wrapped = matches.map(function (v, i, a) {
                return '<a href="' + v + '">' + v + '</a>';
            });

            for (var i = 0; i < matches.length; i++) {
                str = str.replace(matches[i], wrapped[i]);
            }
        }
        return new Handlebars.SafeString(str)
    });
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
