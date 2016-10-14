(function (module) {
    mainView = {};

    // a function to render through Handlebars
    var render = function (data) {
        var template = Handlebars.compile($('#tweetTemplate').text());

        return template(data);
    };

    mainView.init = function () {
        $('#aboutThisSite').hide();
        $('#ourTeam').hide();
        $('#commentForm').hide();
        $('#tweetsPool').show();

    };

    mainView.about = function () {
        $('#tweetsPool').hide();
        $('#ourTeam').hide();
        $('#commentForm').hide();
        $('#aboutThisSite').show();
    };

    mainView.team = function () {
        $('#tweetsPool').hide();
        $('#commentForm').hide();
        $('#aboutThisSite').hide();
        $('#ourTeam').show();
    };

    mainView.addIssue = function () {
        $('#tweetsPool').hide();
        $('#aboutThisSite').hide();
        $('#ourTeam').hide();
        $('#commentForm').show();
    };
    
    module.mainView = mainView;
})(window);