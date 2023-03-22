fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
.then (Response =>Response.json())
.then(data => {
    const booksArray = data.results;
    const table = document.createElement ('table');
    const tableHeader = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const urlHeader = document.createElement('th');
    nameHeader.innerText = "Name";
    urlHeader.innerText = "URL";
})