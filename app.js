
//variables for trending buttons
var topVICE;
var topWIRED;
var topBR;
var topBF;
var topVerge;


//button click command
//api key and AJAX request
$("#submitWIRED").on("click", function () {

    var WIREDqueryURL = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: WIREDqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topWIRED = response.articles[i].title;
            $("#topWired").append("<li>" + topWIRED + "</li>");
        }
    });
});

//button click command
//api key and AJAX request
$("#submitVICE").on("click", function () {

    var VICEqueryURL = "https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VICEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVICE = response.articles[i].title;
            $("#topVice").append("<li>" + topVICE + "</li>");
        }
    });
});

//button click command
//api key and AJAX request
$("#submitBR").on("click", function () {

    var BRqueryURL = "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BRqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBR = response.articles[i].title;
            $("#topBR").append("<li>" + topBR + "</li>");
        }
    });
});

//button click command
//api key and AJAX request
$("#submitBF").on("click", function () {

    var BFqueryURL = "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BFqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBF = response.articles[i].title;
            $("#topBUZZFEED").append("<li>" + topBF + "</li>");
        }
    });
});

//button click command
//api key and AJAX request
$("#submitVerge").on("click", function () {
    var VERGEqueryURL = "https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=95fc06a84c3242019177b79e752121ea";

    $.ajax({
        url: VERGEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVerge = response.articles[i].title;
            $("#topVERGE").append("<li>" + topVerge + "</li>");
        }
    });
});









// $("#submitCNN").on("click", function () {

//     var CNNqueryURL = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=95fc06a84c3242019177b79e752121ea";
//     $.ajax({
//         url: CNNqueryURL,
//         method: 'GET'
//     }).then(function (response) {
//         for (i = 0; i < response.articles.length; i++) {
//             topCNN = response.articles[i].title;
//             $("#topCNN").append("<li>" + topCNN + "</li>");
//         }
//     });
// });