const bookGrid = document.getElementById('book-grid');
const genreFilter = document.getElementById('genre');
const applyFiltersButton = document.getElementById('apply-filters');

const books = [
  { title: 'Book A', genre: 'fiction', cover: 'assets/book-covers/book1.jpg' },
  { title: 'Book B', genre: 'non-fiction', cover: 'assets/book-covers/book2.jpg' },
  { title: 'Book C', genre: 'mystery', cover: 'assets/book-covers/book3.jpg' }
];

function displayBooks(filteredBooks) {
  bookGrid.innerHTML = filteredBooks.map(book => `
    <div class="book">
      <img src="${book.cover}" alt="${book.title}">
      <p>${book.title}</p>
    </div>
  `).join('');
}

applyFiltersButton.addEventListener('click', () => {
  const selectedGenre = genreFilter.value;
  const filteredBooks = books.filter(book => book.genre === selectedGenre);
  displayBooks(filteredBooks);
});

// Display all books by default
displayBooks(books);