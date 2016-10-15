(function (module) {
    mainView = {};

    mainView.init = function () {
        $('#about').fadeOut(500);
        $('#team').fadeOut(500);
        $('#form').fadeOut(500);
        $('#sortingMenu').show();
        $('#tweetsPool').fadeIn(500)
    };

    mainView.about = function () {
        $('#sortingMenu').fadeOut(500);
        $('#tweetsPool').fadeOut(500);
        $('#team').fadeOut(500);
        $('#form').fadeOut(500);
        $('#about').fadeIn(500);
    };

    mainView.team = function () {
        $('#sortingMenu').fadeOut(500);
        $('#tweetsPool').fadeOut(500);
        $('#form').fadeOut(500);
        $('#about').fadeOut(500);
        $('#team').fadeIn(500);
    };

    mainView.addIssue = function () {
        $('#sortingMenu').fadeOut(500);
        $('#tweetsPool').fadeOut(500);
        $('#about').fadeOut(500);
        $('#team').fadeOut(500);
        $('#form').fadeIn(500);
    };
    
    module.mainView = mainView;
})(window);