page('/', function(){

    tweetsController.init(mainView.init);
});

page('/about', function() {
    mainView.about();
    tweetsController.init();
    formController.init();
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

page();
