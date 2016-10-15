(function (module) {
    mainView = {};

    mainView.init = function () {
        $('#about, #team, #form, #sortingMenu, #tweetsPool').fadeOut(500, function(){
            $('#sortingMenu, #tweetsPool').fadeIn(500);
        });

    };

    mainView.about = function () {
        $('#sortingMenu, #tweetsPool, #team, #form, #about').fadeOut(500, function () {
            $('#about').fadeIn(500);
        });
    };

    mainView.team = function () {
        $('#sortingMenu, #tweetsPool, #form, #about, #team').fadeOut(500, function () {
            $('#team').fadeIn(500);
        });
    };

    mainView.addIssue = function () {
        $('#sortingMenu, #tweetsPool, #about, #team, #form').fadeOut(500, function () {
            $('#form').fadeIn(500);
        });
    };
    
    module.mainView = mainView;
})(window);