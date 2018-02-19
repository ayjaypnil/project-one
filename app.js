var topVICE;
var topWIRED;
var topBR;
var topBF;
var topVerge;
var topUS;


starter();
// there is an error here in this file on the load that needs to be fixed. 


function starter() {
    var topUSqueryURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topUSqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topUS = response.articles[i].title;
            descriptionUS = response.articles[i].description;
            imageUS = response.articles[i].urlToImage;
            urlUS = response.articles[i].url;
            console.log(topUS + descriptionUS + imageUS + urlUS);

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlUS + "' target='_blank'><img class='media-object img-rounded' src='" + imageUS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topUS + "</h4><p id='newsDescription'>" + descriptionUS + "</p></div></div>");
        }
    });
};

$("#submitWIRED").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var WIREDqueryURL = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: WIREDqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topWIRED = response.articles[i].title;
            descriptionWIRED = response.articles[i].description;
            imageWIRED = response.articles[i].urlToImage;
            urlWIRED = response.articles[i].url;

            // dynamically create the whole damn media thing
            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlWIRED + "' target='_blank'><img class='media-object img-rounded' src='" + imageWIRED + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topWIRED + "</h4><p id='newsDescription'>" + descriptionWIRED + "</p></div></div>");
        }
        $("#newsTitle").append("Wired!");
    });
});

$("#submitVICE").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var VICEqueryURL = "https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VICEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVICE = response.articles[i].title;
            descriptionVICE = response.articles[i].description;
            imageVICE = response.articles[i].urlToImage;
            urlVICE = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlVICE + "' target='_blank'><img class='media-object img-rounded' src='" + imageVICE + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topVICE + "</h4><p id='newsDescription'>" + descriptionVICE + "</p></div></div>");
        }
        $("#newsTitle").append("Vice News!");
    });
});

$("#submitBR").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var BRqueryURL = "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BRqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBR = response.articles[i].title;
            descriptionBR = response.articles[i].description;
            imageBR = response.articles[i].urlToImage;
            urlBR = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlBR + "' target='_blank'><img class='media-object img-rounded' src='" + imageBR + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBR + "</h4><p id='newsDescription'>" + descriptionBR + "</p></div></div>");
        }
        $("#newsTitle").append("Bleacher Report!");
    });
});

$("#submitBF").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var BFqueryURL = "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BFqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBF = response.articles[i].title;
            descriptionBF = response.articles[i].description;
            imageBF = response.articles[i].urlToImage;
            urlBF = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlBF + "' target='_blank'><img class='media-object img-rounded' src='" + imageBF + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBF + "</h4><p id='newsDescription'>" + descriptionBF + "</p></div></div>");
        }
        $("#newsTitle").append("Buzzfeed!");
    });
});

$("#submitVerge").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var VERGEqueryURL = "https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VERGEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVerge = response.articles[i].title;
            descriptionVerge = response.articles[i].description;
            imageVerge = response.articles[i].urlToImage;
            urlVerge = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlVerge + "' target='_blank'><img class='media-object img-rounded' src='" + imageVerge + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topVerge + "</h4><p id='newsDescription'>" + descriptionVerge + "</p></div></div>");
        }
        $("#newsTitle").append("The Verge!");
    });
});