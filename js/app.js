// Mood-Based Recommendations
const moodButtons = document.querySelectorAll('.mood-buttons button');
const moodBooks = document.getElementById('mood-books');

const booksByMood = {
  adventurous: ['Book A', 'Book B', 'Book C'],
  relaxing: ['Book D', 'Book E', 'Book F'],
  mysterious: ['Book G', 'Book H', 'Book I']
};

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    const books = booksByMood[mood];
    moodBooks.innerHTML = books.map(book => `<p>${book}</p>`).join('');
  });
});