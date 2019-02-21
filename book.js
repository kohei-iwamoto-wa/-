function handleResponse(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
      document.getElementById("content").innerHTML += '<br><br><div class="book_title">' + 'タイトル:' + item.volumeInfo.title + '</div>';
      item.volumeInfo.title;
      document.getElementById("content").innerHTML += '<div class="authors_font_size">' + "著者:" + item.volumeInfo.authors + '</div>';
      document.getElementById("content").innerHTML += '<br>' + '<img src="' + item.volumeInfo.imageLinks.thumbnail + '">' + '<br>';
      document.getElementById("content").innerHTML += '<br><div class="description_font_size">' + '概要:' + item.volumeInfo.description + '</div>';
      document.getElementById("content").innerHTML += '<br>' + 'google books:' + '<a href ="' + item.volumeInfo.previewLink + '">' + 'Preview' + '</a>' ;
      scrollBy(0,80);
      }
    }
// function scrollDown(response){
//     }
function removeDiv(response){
    var message = document.getElementsByClassName('please_search');
    message.parentNode.removeChild(please_search);
  }

    var button = document.getElementById("search");
        button.addEventListener("click", function(e) {

        e.preventDefault();
        var textForm = document.getElementById("textForm").value;

        document.getElementById("book_url").src = 'https://www.googleapis.com/books/v1/volumes?q=' + textForm + '&callback=handleResponse';
});

