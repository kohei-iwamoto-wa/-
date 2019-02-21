books = [];

function handleResponse(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];

      document.getElementById("content").innerHTML += "<br>" + "出版年月日:" + item.volumeInfo.publishedDate;
      // console.log(date);
      // var publish_date = [];
      // publish_date.push(date);
      books.push([i]);
      console.log(books);


      }
    }
    var button = document.getElementById("button -small -primary");
        button.addEventListener("click", function(e) {

        e.preventDefault();
        var textForm = document.getElementById("textForm").value;

        document.getElementById("book_url").src = 'https://www.googleapis.com/books/v1/volumes?q=' + textForm + '&callback=handleResponse';
  });