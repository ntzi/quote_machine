$(document).ready(function() {





  // Get a new quote once the page is loaded.
  get_quote();
  // Set a random color to the page and the buttons.
  setRandomColor();

  // Call get_quote() every time we click the "get quote" button.
  $("#getMessage").on("click", function(){
    // Get a anew quote.
    get_quote();
  });

});





function get_quote() {

  // The url to the API to get the quotes.
  url = "https://andruxnet-random-famous-quotes.p.mashape.com";
  var quote;
  var author;
  var html;
  var new_tweet = "https://twitter.com/intent/tweet?text=";

  $.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", 'Hzqa68krAPmshXvo2dlKEdkXt5ktp1bQzjvjsnEqzfPOlibXnM');
    },
    dataType: "json",
    url: url,
    success: function(data) {

      quote = data[0]["quote"];
      author = data[0]["author"];

      html = "<h2 class='quote_css'>\"" + quote + "\"</h2>" +
        "<p class='author_css'>- " + author + "</p>";

      // Make a smooth transition/fade in of the quote.
      $(".message").hide().html(html).fadeIn(2500);
      // Change the colors randomlly.
      setRandomColor();




      // Set the href of the twitter button.
      var link = document.getElementById("tweet_link");

      new_tweet += "\"" + quote + "\" -" + author;
      link.setAttribute('href', new_tweet);
    }
  });
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  var new_color = getRandomColor();

  // Make the coror transitions smooth too.
  $("body").css({"background-color": new_color, "transition": "all 2s ease-in-out"});
  $(".fa").css({"color": new_color, "transition": "color 2s ease-in-out"});
  $(".btn").css({"background-color": new_color, "border-color": new_color,
  "transition": "background-color 2s ease-in-out, border-color 2s ease-in-out"});
}
