(function (module) {
    var top5View = {};

    var render = function (data) {
        var top5Template = Handlebars.compile($('#top5Template').text());

        return top5Template(data);
    };

    // tweetView.newest = function (data) {
    //     $("#tweetsPoolPopular").fadeOut(300);
    //     $('#tweetsPoolNew').append(
    //         data.map(render)
    //     ).delay(100).fadeIn(300);
    // };

    top5View.popular = function (data) {
       
       console.log(data[0].id);
       data.sort(function(a,b){
           return b.retweet_count - a.retweet_count;
       })
       console.log(data);
       data=data.slice(0,5);
       console.log(data);
        $('#tweetsTop5').append(data.map(render));
    };

    module.top5View = top5View;
})(window);
