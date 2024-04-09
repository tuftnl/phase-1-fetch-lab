function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const main = fetch('https://anapioficeandfire.com/api/books')
  .then(response = response.json())
  .then(data => console.log(data))
  .catch(error =>  console.error('Error', error));
  return main 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

console.log(fetchBooks())