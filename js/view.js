(function (module) {
    mainView = {};

    // a function to render through Handlebars
    var render = function (data) {
        var template = Handlebars.compile($('#tweetTemplate').text());

        return template(data);
    };

    mainView.init = function () {
        $('#about').hide();
        $('#team').hide();
        $('#form').hide();
        $('#tweetsPool').show();
    };

    mainView.about = function () {
        $('#tweetsPool').hide();
        $('#team').hide();
        $('#form').hide();
        $('#about').show();
    };

    mainView.team = function () {
        $('#tweetsPool').hide();
        $('#form').hide();
        $('#about').hide();
        $('#team').show();
    };

    mainView.addIssue = function () {
        $('#tweetsPool').hide();
        $('#about').hide();
        $('#team').hide();
        $('#form').show();
    };
    
    module.mainView = mainView;
})(window);