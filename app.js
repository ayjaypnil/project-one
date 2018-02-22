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

// $(".btn").on("click", function(animate){
//     $("h3 center").addClass("black");
// });

connectedRef.on("value", function (snap) {
    if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function (snap) {
    $("#totalCon").text(snap.numChildren());
});



    $(document).ready(function() {
        var QuotequeryURL = "https://random-quote-generator.herokuapp.com/api/quotes/";

        $.ajax({
            url: QuotequeryURL,
            method: 'GET'
        }).then(function (response) {
            var randomQuote = Math.floor(Math.random() * 81);
            $("#newsTitle").append(response[randomQuote].quote);
            $("#authorQuote").append("-" + response[randomQuote].author);
             
            
        });
    });


$("#topUSNEWS").on("click", function(event){
  event.preventDefault();
  
  $("#mediadiv").empty();
  $("#newsTitle").empty();
  $("#authorQuote").empty();
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
        //   $("#headingPanel").append("<div class='panel panel-default'><h3 class='panel-title'><center><span id='newsTitle'> </span></center></h3></div>")
          $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlUS + "' target='_blank'><img class='media-object img-rounded' src='" + imageUS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topUS + "</h4><p id='newsDescription'>" + descriptionUS + "</p></div></div></div>");
      } 
      $("#newsTitle").append("Top US Headlines");
  });
});

$("#businessNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    $("#authorQuote").empty();
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

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlBIZ + "' target='_blank'><img class='media-object img-rounded' src='" + imageBIZ + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBIZ + "</h4><p id='newsDescription'>" + descriptionBIZ + "</p></div></div></div>");
        }

        $("#newsTitle").append("Top Business Headlines");
    });
});

$("#sportsNEWS").on("click", function () {
    $("#mediadiv").empty();
    $("#newsTitle").empty();
    $("#authorQuote").empty();
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

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlSPORTS + "' target='_blank'><img class='media-object img-rounded' src='" + imageSPORTS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topSPORTS + "</h4><p id='newsDescription'>" + descriptionSPORTS + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Sports Headlines");
    });
});

$("#technologyNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    $("#authorQuote").empty();
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

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlTECH + "' target='_blank'><img class='media-object img-rounded' src='" + imageTECH + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topTECH + "</h4><p id='newsDescription'>" + descriptionTECH + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Technology Headlines");
    });
});


$("#entertainmentNEWS").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    $("#authorQuote").empty();
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

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlENT + "' target='_blank'><img class='media-object img-rounded' src='" + imageENT + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topENT + "</h4><p id='newsDescription'>" + descriptionENT + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Entertainment Headlines");
    });
});



$("#searchSUBMIT").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();
    $("#authorQuote").empty();

    var newsSEARCH = $("#newsSEARCH").val();
    var SEARCHqueryurl = "https://newsapi.org/v2/top-headlines?q=" + newsSEARCH + "&sortBy=popularity&apiKey=95fc06a84c3242019177b79e752121ea"

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
            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlSEARCH + "' target='_blank'><img class='media-object img-rounded' src='" + imageSEARCH + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topSEARCH + "</h4><p id='newsDescription'>" + descriptionSEARCH + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Headlines From Google News Regarding: " + newsSEARCH);
    });
});




