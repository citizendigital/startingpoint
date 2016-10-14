(function(module){
    var formController = {};
    formController.data = {};

    formController.gatherData = function(){
        var textHashArr = this.parseData($('#textInput').val());

        return {
            name: $('#userName').val(),
            text: encodeURIComponent(textHashArr[0]),
            hashtags: encodeURIComponent(textHashArr[1])
        };
    };

    formController.parseData = function(txt){
        var arr_Txt = txt.split(" ");
        var arr_Hashtags = arr_Txt.map(function(el){
            if(el.indexOf('#') > 0){
                el.replace('#', '');
            }
        });
        return [arr_Txt.join(" "), arr_Hashtags.join(" ")];
    };

    formController.formToTwitter = function(){
        window.open(
            'https://twitter.com/intent/tweet?text=' + this.data.text,
            '_blank'
        ).focus();
    };

    $('#btnForm').on('click', function(){
        // Gather data
        formController.data = formController.gatherData();

        // Launch and populate Twitter tab
        formController.formToTwitter();

        // Query API for username
        $.get('/timeline/' + formController.data.name, function(data){
            console.log(data);
            // tweetsController.all.push(data);
        });

        // Monitor users stream until a new tweet is published
        // Compare that tweet to text of our issue
        // If matching, add that tweet to our collection
        // Notify of success
        // Return to main page view

        // Q: Store userID and time of tweet?
        // Don't allow any more than one submission per x-hours
    });


    module.formController = formController;
})(window);
