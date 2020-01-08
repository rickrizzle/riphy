console.log("hello");

function getData() {
  var input = $("#searchtext").val();
  console.log(input);
  //request
  var xhr = $.get(
    "https://api.giphy.com/v1/gifs/search?api_key=bECnxnXVImTQHVDTtBp47nQUbiPc8Wmk&q=" +
      input +
      "&limit=25&offset=0&rating=PG-13&lang=en"
  );

  //promise
  xhr.done(function(response) {
    console.log("success got data", response);
    var jiffs = response.data;

    for (i in jiffs) {
      $(".inner").append(
        "<img src='" +
          jiffs[i].images.original.url +
          "' style='height:350px; width:350px;'/>"
      );
    }
  });
}
