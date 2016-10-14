page('/', function(){
    tweetsController.init(mainView.init);
});
page('/about', function() {
    mainView.about();
});
page('/form', function() {
    formController.index();
});
page('/team', function() {
    mainView.team();
});

page();

