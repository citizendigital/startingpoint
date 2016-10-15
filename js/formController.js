(function(module){
    var formController = {};
    formController.data = {};
    formController.twitterData = {};

    formController.init =  function(){
        $("#issueButton").on('click', function(){
            mainView.addIssue();
        });

        $('#btn_Submit').on('click', function(){
            console.log('Click!');
            // Gather data
            formController.data = formController.gatherData();

            // First query gets user and single (latest) tweet to get ID
            formController.twitterData = formController.getUserTimeline({
                name: formController.data.name,
                count: 1,
                since_id: 100 // This is arbitrary #
            }, function(tdata){ // callback sets twitterData from API
                formController.twitterData = tdata;
                setWatch();
            });

            // Trigger watch function
            // Subsequent queries return only tweets newer than original id#
            function setWatch(){
                formController.watchTwitterUser({
                    name: formController.data.name, // Username
                    count: 5, // How many to fetch
                    since_id: formController.twitterData[0].id // This is returned from initial call
                }, function(newTweet){
                    if(newTweet.length){
                        alert("There's been a new tweet!");
                        // Stop timer
                        clearInterval(watch);
                        alert("Stopping watch!");
                    }
                });
            }

            // Launch and populate Twitter tab
            formController.formToTwitter();


            // Next steps...
            // Monitor users stream until a new tweet is published
            // Compare that tweet to text of our issue
            // If matching, add that tweet to our collection
            // Notify of success
            // Return to main page view

            // Q: Store userID and time of tweet?
            // Don't allow any more than one submission per x-hours
        });
    };

    formController.getUserTimeline = function(paramsObj, callback){//callback function requied?
        // Query API for username
        $.get('/timeline/' + paramsObj.name + '/' + paramsObj.count + '/' + paramsObj.since_id, function(data){
            console.log(data);
            // this should be limited to top 3-5, or customizable
            // return data;
            callback(data);
        });
    };

    formController.gatherData = function(){
        var textHashArr = this.parseData($('#input_Text').val());

        return {
            name: $('#usr').val(),
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

    var watch;
    formController.watchTwitterUser = function(paramsObj, callback){
        watch = setInterval(function(){
            formController.getUserTimeline(paramsObj, callback);
            // if user and text message match stored data,
            // add that tweet to our collection
        }, 10000);
    };

    formController.endWatch = function(){

    };

    module.formController = formController;
})(window);
