$('.search-button').click(function() {
  var searchTerm = $('.search-bar').val();

  if (document.getElementById("wikipedia").checked) {

    var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"

    $.ajax(wikiURL, {
      type: "GET",
      jsonp: "callback",
      dataType: "jsonp"

    }).done(function(data) {
      $("#wikipedia-result").empty();
      $("#wikipedia-result").append("<strong>" + data[1][0] + "</strong>" + "<br><br>");
      $("#wikipedia-result").append(data[2][0] + "<br><br>");
      $("#wikipedia-result").append(data[3][0] + "<br><br><br> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    });
  }

  // if (document.getElementById("youtube").checked) {
  //   var ytURL = "https://www.youtube.com/results?search_query=" + "searchTerm";
  //
  //   var ytJSON = $.ajax(ytURL, {
  //     type: "GET",
  //     jsonp: "callback",
  //     dataType: "jsonp"
  //
  //   }).done(function(data) {
  //     console.log(data);
  //   });
  //
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=" + ytJSON + "&key=AIzaSyCj389qSjIJpk_Ujn5kMKmBfwIQWf53-Zs",
  //     "method": "GET",
  //     "headers": {
  //       "cache-control": "no-cache",
  //       "postman-token": "a5932fd2-ddee-61fd-5df8-b3ac8d6b3207"
  //     }
  //   }
  //
  //   $.ajax(settings).done(function(response) {
  //     console.log(response);
  //   });
  // }

  if (document.getElementById("stackoverflow").checked) {
    var searchTerm = $(".search-bar").val();

    if (document.getElementById("stackoverflow").checked) {

      var stackoverflowURL = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=" + searchTerm + "&site=stackoverflow"

      $.ajax(stackoverflowURL, {
        type: "GET",
        jsonp: "callback",
        dataType: "jsonp"

      }).done(function(data) {
        $("#stackoverflow-result").empty();
        $("#stackoverflow-result").append("<strong>" + data["items"][0]["title"] + "</strong><br>" + data["items"][0]["link"] + "<br><br><strong>" + data["items"][1]["title"] + "</strong><br>" + data["items"][1]["link"] + "<br><br><strong>" + data["items"][2]["title"] + "</strong><br>" + data["items"][2]["link"] + "<br><br><br> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      });
    }
  }

  if(document.getElementById("yahoo-answers").checked) {
    var searchTerm = $(".search-bar").val();
    var yahooAnswersUrl = "";
    $.ajax(yahooAnswersUrlURL, {
      type: "GET",
      jsonp: "callback",
      dataType: "jsonp"

    }).done(function(data) {
      $("#yahoo-answers-result").empty();
      $("#yahoo-answers-result").append("<strong>" + data["items"][0]["title"] + "</strong><br>" + data["items"][0]["link"] + "<br><br><strong>" + data["items"][1]["title"] + "</strong><br>" + data["items"][1]["link"] + "<br><br><strong>" + data["items"][2]["title"] + "</strong><br>" + data["items"][2]["link"] + "<br><br><br> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    });

  }
})
//   if(document.getElementById("#blogger").checked) {
//     var searchTerm = $(".search-bar").val();
//
//     if
//   });
// });
