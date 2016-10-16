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
       // $("#tweetsTop5").fadeOut(300);
        $('#tweetsTop5').append(data.map(render));
    };

    module.top5View = top5View;
})(window);
