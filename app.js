var config = {
    apiKey: "AIzaSyC4-zoIQx2rzmXOUiC3bHAI4_ncTqfwAZ4",
    authDomain: "trend-project-ee37f.firebaseapp.com",
    databaseURL: "https://trend-project-ee37f.firebaseio.com",
    projectId: "trend-project-ee37f",
    storageBucket: "trend-project-ee37f.appspot.com",
    messagingSenderId: "519469367647"
};

firebase.initializeApp(config);

var database = firebase.database();

var topVICE;
var topWIRED;
var topBR;
var topBF;
var topVerge;


var connectionsRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

$(".btn").on("click", function(animate){
    $("h3 center").addClass("black");
});

connectedRef.on("value", function (snap) {
    if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function (snap) {
    $("#totalCon").text(snap.numChildren());
});


$("#topUSNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
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
            //   console.log(topUS + descriptionUS + imageUS + urlUS);

            if (descriptionUS == null) {
                descriptionUS = "Apologies, our sources are constantly updating in real-time, and this description has not refreshed. Please check back in a few, or feel free to click the image to the left to go directly to the full story!";
            }
            $(document).ready(function () {
                $("img").bind("error", function () {
                    // Replacing image source
                    $(this).attr("src", "trendfivelogo.png");
                });
            });
            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlUS + "' target='_blank'><img class='media-object img-rounded' src='" + imageUS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topUS + "</h4><p id='newsDescription'>" + descriptionUS + "</p></div></div>");
        }
        $("#newsTitle").append("Top US Headlines");
    });
});

$("#businessNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topBUSINESSqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topBUSINESSqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBIZ = response.articles[i].title;
            descriptionBIZ = response.articles[i].description;
            imageBIZ = response.articles[i].urlToImage;
            urlBIZ = response.articles[i].url;
            //   console.log(topBIZ + descriptionBIZ + imageBIZ + urlBIZ);
            console.log(descriptionBIZ);
            if (descriptionBIZ == null) {
                descriptionBIZ = "Apologies, our sources are constantly updating in real-time, and this description has not refreshed. Please check back in a few, or feel free to click the image to the left to go directly to the full story!";
            }
            $(document).ready(function () {
                $("img").bind("error", function () {
                    // Replacing image source
                    $(this).attr("src", "trendfivelogo.png");
                });
            });

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlBIZ + "' target='_blank'><img class='media-object img-rounded' src='" + imageBIZ + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBIZ + "</h4><p id='newsDescription'>" + descriptionBIZ + "</p></div></div>");
        }

        $("#newsTitle").append("Top Business Headlines");
    });
});

$("#sportsNEWS").on("click", function () {
    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topSPORTSqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topSPORTSqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topSPORTS = response.articles[i].title;
            descriptionSPORTS = response.articles[i].description;
            imageSPORTS = response.articles[i].urlToImage;
            urlSPORTS = response.articles[i].url;
            //   console.log(topSPORTS + descriptionSPORTS + imageSPORTS + urlSPORTS);
            if (descriptionSPORTS == null) {
                descriptionSPORTS = "Apologies, our sources are constantly updating in real-time, and this description has not refreshed. Please check back in a few, or feel free to click the image to the left to go directly to the full story!";
            }
            $(document).ready(function () {
                $("img").bind("error", function () {
                    // Replacing image source
                    $(this).attr("src", "trendfivelogo.png");

                });
            });

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlSPORTS + "' target='_blank'><img class='media-object img-rounded' src='" + imageSPORTS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topSPORTS + "</h4><p id='newsDescription'>" + descriptionSPORTS + "</p></div></div>");
        }
        $("#newsTitle").append("Top Sports Headlines");
    });
});

$("#technologyNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topTECHqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topTECHqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topTECH = response.articles[i].title;
            descriptionTECH = response.articles[i].description;
            imageTECH = response.articles[i].urlToImage;
            urlTECH = response.articles[i].url;
            //   console.log(topTECH + descriptionTECH + imageTECH + urlTECH);
            if (descriptionTECH == null) {
                descriptionTECH = "Apologies, our sources are constantly updating in real-time, and this description has not refreshed. Please check back in a few, or feel free to click the image to the left to go directly to the full story!";
            }
            $(document).ready(function () {
                $("img").bind("error", function () {
                    // Replacing image source
                    $(this).attr("src", "trendfivelogo.png");

                });
            });

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlTECH + "' target='_blank'><img class='media-object img-rounded' src='" + imageTECH + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topTECH + "</h4><p id='newsDescription'>" + descriptionTECH + "</p></div></div>");
        }
        $("#newsTitle").append("Top Technology Headlines");
    });
});


$("#entertainmentNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topENTqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topENTqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topENT = response.articles[i].title;
            descriptionENT = response.articles[i].description;
            imageENT = response.articles[i].urlToImage;
            urlENT = response.articles[i].url;
            //   console.log(topENT + descriptionENT + imageENT + urlENT);
            if (descriptionENT == null) {
                descriptionENT = "Apologies, our sources are constantly updating in real-time, and this description has not refreshed. Please check back in a few, or feel free to click the image to the left to go directly to the full story!";
            }
            $(document).ready(function () {
                $("img").bind("error", function () {
                    // Replacing image source
                    $(this).attr("src", "trendfivelogo.png");
                });
            });

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlENT + "' target='_blank'><img class='media-object img-rounded' src='" + imageENT + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topENT + "</h4><p id='newsDescription'>" + descriptionENT + "</p></div></div>");
        }
        $("#newsTitle").append("Top Entertainment Headlines");
    });
});



$("#searchSUBMIT").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();

    var newsSEARCH = $("#newsSEARCH").val();
    var SEARCHqueryurl = "https://newsapi.org/v2/everything?q=" + newsSEARCH + "&sortBy=popularity&apiKey=95fc06a84c3242019177b79e752121ea"

    $.ajax({
        url: SEARCHqueryurl,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topSEARCH = response.articles[i].title;
            descriptionSEARCH = response.articles[i].description;
            imageSEARCH = response.articles[i].urlToImage;
            urlSEARCH = response.articles[i].url;

            if (descriptionSEARCH == null) {
                descriptionSEARCH = "Apologies, our sources are constantly updating in real-time, and this description has not refreshed. Please check back in a few, or feel free to click the image to the left to go directly to the full story!";
            }

            //   console.log(topSEARCH + descriptionSEARCH + imageSEARCH + urlSEARCH);
            $(document).ready(function () {
                $("img").bind("error", function () {
                    // Replacing image source
                    $(this).attr("src", "trendfivelogo.png");

                });
            });
            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlSEARCH + "' target='_blank'><img class='media-object img-rounded' src='" + imageSEARCH + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topSEARCH + "</h4><p id='newsDescription'>" + descriptionSEARCH + "</p></div></div>");
        }
        $("#newsTitle").append("Top Headlines From Google News Regarding: " + newsSEARCH);
    });
});




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

            // dynamically create the whole media thing
            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlWIRED + "' target='_blank'><img class='media-object img-rounded' src='" + imageWIRED + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topWIRED + "</h4><p id='newsDescription'>" + descriptionWIRED + "</p></div></div>");
        }
    });
});

//button click command
//api key and AJAX request
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
    });
});

//button click command
//api key and AJAX request
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
    });
});

//button click command
//api key and AJAX request
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
    });
});

//button click command
//api key and AJAX request
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
    });
});