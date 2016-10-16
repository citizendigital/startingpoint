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
    $("#tweetsPoolNew").children().fadeOut(200).remove();
    tweetsController.recent();
});

page('/popular', function () {
    $("#tweetsPoolPopular").children().fadeOut(200).remove();
    tweetsController.popular();
});

page();
