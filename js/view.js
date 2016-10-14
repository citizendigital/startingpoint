(function (module) {
    mainView = {};

    // a function to render through Handlebars
    var render = function (data) {
        var template = Handlebars.compile($('#tweetTemplate').text());

        return template(data);
    };

    mainView.init = function () {

    };

    module.mainView = mainView;
})(window);