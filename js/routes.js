page('/', function(){

    tweetsController.init(mainView.init);
    formController.init();
});

page('/about', function() {
    mainView.about();
});

page('/about', function() {
    aboutController.index();
});

page('/form', function() {
    formController.index();
});

page('/team', function() {
    mainView.team();
});

page('/newest', function () {

});

page('/popular', function () {
    tweetsController.init(tweetView.popular);
});

page();
