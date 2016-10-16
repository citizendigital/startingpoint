var Twitter = require('twitter');
var moment = require('moment');
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('./'));

app.get('/', function(request, response) {
    response.sendFile('index.html', { root: '.' });
});

app.get('/about', function(req, res){
    res.sendFile('index.html', { root: '.' });
});

app.get('/team', function(req, res){
    res.sendFile('index.html', { root: '.' });
});

app.get('/form', function(req, res){
    res.sendFile('index.html', { root: '.' });
});

app.get('/newest', function(req, res){
    res.sendFile('index.html', { root: '.' });
});

app.get('/popular', function(req, res){
    res.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
    console.log('Server started on port ' + port + '!');
});

// Gets (collection) entries associated with citizendigital_
app.get('/collection/:sortType', function(req, res) {
    var params = {
        id: 'custom-786661844542902272'
    };

    client.get('collections/entries', params, function(error, tweets, response) {
        if (!error) {

            var sorted = sort(tweets, req.params.sortType);
            res.send(sorted);
            // res.send(tweets);
        } else {
            console.log("Error: ", error)
        }
    });
});


// sort according to: req.params.sortType
function sort(data, sortType){

    var tweetsObj = data.objects.tweets;
    var usersObj = data.objects.users;

    var sortedArr = [];
    for(var key in tweetsObj){
        sortedArr.push({
            key: key,
            id: +key,
            retweet_count: tweetsObj[key].retweet_count,
            source: tweetsObj[key].source,
            text: tweetsObj[key].text,
            hashtags: tweetsObj[key].entities.hashtags.map(function(el){return el.text;}),
            user: getUser(tweetsObj[key].user.id_str, 'name'),
            screen_name: getUser(tweetsObj[key].user.id_str, 'screen_name'),
            date: moment(tweetsObj[key].created_at, "ddd MMM DD HH:mm:ss Z YYYY").format('dddd, MMMM Do, h:mm a')
        });
    }

    function getUser(id, prop){
        return usersObj[id][prop];
    }

    if(sortType === 'recent'){
        sortedArr.sort(function(a, b){
            return b.id - a.id;
        });
    }
    if(sortType === 'popular'){
        sortedArr.sort(function(a, b){
            return b.retweet_count - a.retweet_count;
        });
    }
    return sortedArr;
}



// Post user tweet to our collection
app.post('/collection/:tweet_id', function(req, res) {
    var params = {id: 'custom-786661844542902272',
    tweet_id: req.params.tweet_id
};

    client.post('collections/entries/add', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
            res.send(tweets);
        } else {
            console.log(response.toJSON());
        }
    });
});

// // Gets timeline (list of tweets) from a username
app.get('*/timeline/:username/:count/:since_id', function(req, res) {
    var params = {
        screen_name: req.params.username,
        count: req.params.count,
        since_id: req.params.since_id
    };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            if(tweets.length){
                console.log(tweets);
                res.send(tweets);
            }
        }
    });
});


// // Output a stream of tweets (realtime) with keyword 'pdx'
// client.stream('statuses/filter', {track: 'pdx'}, function(stream){
//     stream.on('data', function(event){
//         console.log(event && event.text);
//         app.locals.pdx = event.text;
//     });
//
//     stream.on('error', function(error){
//         throw error;
//     });
// });


// Post a tweet (also known as status update) with text "Hello World!"
// client.post('statuses/update', {status: 'Hello World!'},  function(error, tweet, response) {
//     if(error) throw error;
//     console.log(tweet);  // Tweet body.
//     console.log(response);  // Raw response object.
// });

// Gets id for collection (ex: custom-786661844542902272)
// var params = {screen_name: 'citizendigital_', count: 5};
// client.get('collections/list', params, function(error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });


// Gets text following route search/ and launches streaming search
// app.get('*/search/:txt', function (req, res) {
//     client.stream('statuses/filter', {track: req.params.txt}, function(stream){
//
//         stream.on('data', function(event){
//             // console.log(event && event.text);
//             console.log(event);
//             // app.locals.txt = event.text;
//             // res.send(event.text);
//         });
//
//         stream.on('error', function(error){
//             throw error;
//         });
//     });
// });
