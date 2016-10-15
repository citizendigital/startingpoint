(function (module) {
    mainView = {};

    mainView.init = function () {
        $('#about').hide();
        $('#team').hide();
        $('#form').hide();
        $('#tweetsPool').show("fold", 1000 );
    };

    mainView.about = function () {
        $('#sortingMenu').hide();
        $('#tweetsPool').hide();
        $('#team').hide();
        $('#form').hide();
        $('#about').show();
    };

    mainView.team = function () {
        $('#sortingMenu').hide();
        $('#tweetsPool').hide();
        $('#form').hide();
        $('#about').hide();
        $('#team').show();
    };

    mainView.addIssue = function () {
        $('#sortingMenu').hide();
        $('#tweetsPool').hide();
        $('#about').hide();
        $('#team').hide();
        $('#form').show();
    };
    
    module.mainView = mainView;
})(window);