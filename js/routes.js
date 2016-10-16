page('/', function(){

    tweetsController.recent();
    formController.init();
    mainView.init();
});

page('/about', function() {
    mainView.about();
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

page('/newest', function () {
    tweetsController.recent();
});

page('/popular', function () {
    tweetsController.popular();
});

page();
