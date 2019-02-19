function handleResponse(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
      document.getElementById("content").innerHTML += "<br><br>" + "タイトル:" + item.volumeInfo.title;
      item.volumeInfo.title;
      document.getElementById("content").innerHTML += "<br>" + "著者:" +item.volumeInfo.authors;
      document.getElementById("content").innerHTML += "<br>" + "概要:" +item.volumeInfo.description;
      document.getElementById("content").innerHTML += '<br>' + '購入ページ:' + '<a href ="' + item.volumeInfo.previewLink + '">' + 'Preview' + '</a>';
      document.getElementById("content").innerHTML += '<br>' + 'image:' + '<img src="' + item.volumeInfo.imageLink + '">'
      // document.getElementById("content").innerHTML += '<br>' + 'image:' + '<img src="' + item.imageLinks.thumbnail + '">'
      }
    }
    var button = document.getElementById("button -small -primary");
        button.addEventListener("click", function(e) {

        e.preventDefault();
        var textForm = document.getElementById("textForm").value;

        document.getElementById("book_url").src = 'https://www.googleapis.com/books/v1/volumes?q=' + textForm + '&callback=handleResponse';
  });