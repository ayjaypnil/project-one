
var topVICE;
var topWIRED;
var topBR;
var topBF;
var topVerge;



$("#submitWIRED").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    var WIREDqueryURL = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: WIREDqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topWIRED = response.articles[i].title;
            $("#topNews").append("<li>" + topWIRED + "</li>");
        }
        $("#newsTitle").append("Wired!");
    });
});

$("#submitVICE").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    var VICEqueryURL = "https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VICEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVICE = response.articles[i].title;
            $("#topNews").append("<li>" + topVICE + "</li>");
        }
        $("#newsTitle").append("Vice News!");
    });
});

$("#submitBR").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    var BRqueryURL = "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BRqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBR = response.articles[i].title;
            $("#topNews").append("<li>" + topBR + "</li>");
        }
        $("#newsTitle").append("Bleacher Report!");
    });
});

$("#submitBF").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    var BFqueryURL = "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BFqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBF = response.articles[i].title;
            $("#topNews").append("<li>" + topBF + "</li>");
        }
        $("#newsTitle").append("Buzzfeed!");
    });
});

$("#submitVerge").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    var VERGEqueryURL = "https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VERGEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVerge = response.articles[i].title;
            $("#topNews").append("<li>" + topVerge + "</li>");
        }
        $("#newsTitle").append("The Verge!");
    });
});










