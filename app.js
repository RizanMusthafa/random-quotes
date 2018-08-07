var data = [
  {
    "id": 001,
    "name": "Rizan Musthafa",
    "word": "this is my quote1"
  },

  {
    "id": 002,
    "name": "Rizan Musthafa",
    "word": "this is my quote2"
  },

  {
    "id": 003,
    "name": "Rizan Musthafa",
    "word": "this is my quote3"
  },

  {
    "id": 004,
    "name": "Rizan Musthafa",
    "word": "this is my quote4"
  }
];

$(document).ready(function () {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=", function(a) {
    data = a;
    // var i = Math.ceil(Math.random()*(a.length-1));
    // qoute_div.html(a[i].content);
    // author_i.html(a[i].title);
    });
  
  var main_div = $("#quote_div");
  var qoute_div = $("#quote_div>div");
  var author_i = $("#quote_div>i");

  $("#next_btn").click(function () {
    var i = Math.ceil(Math.random()*9);
      qoute_div.html(data[i].content);
      author_i.html(data[i].title);
  });
});