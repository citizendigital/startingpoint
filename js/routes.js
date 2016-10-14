page('/', function(){

    tweetsController.init(mainView.init);
    formController.init();
});

page('/about', function() {
    mainView.about();
    tweetsController.init();
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
