(function(module) {
    var tweetsController = {};
    tweetsController.all = [];

    tweetsController.init = function() {
        if(tweetsController.all.length !== 0) {
            tweetsController.all = [];
        }

        $.get('/collection', function(data){
            console.log(data);
            tweetsController.all.push(data.objects);
        });
    };

    tweetsController.newestTweets = function () {
                            // this method turn an object of objects into an array
        var tweetsArr = Object.keys(tweetsController.all[0].users).map(function (key){ return tweetsController.all[0].users[key];});
        return tweetsArr.map(function(obj){
            reObj = {};
            reObj["text"] = obj.text;
            reObj["created_at"] = obj.created_at;
            reObj["screen_name"] = obj.screen_name;
            return reObj;
        });
    };

    tweetsController.with = function(attr){
        return tweetsController.all[0].tweets.filter(function(tweetObj){
           return  tweetObj[attr];
        });
    };

    module.tweetsController = tweetsController;
})(window);
