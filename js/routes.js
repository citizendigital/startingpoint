page('/', function(){
    // mainController.index();
    tweetsController.init();
});
page('/about', function() {
    aboutController.index()
});
page('/form', function() {
    formController.index();
});
page('/team', function() {
    teamController.index();
});

//  Activate page.js!
page();

