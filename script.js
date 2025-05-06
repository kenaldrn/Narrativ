async function loadBooks() {
  const response = await fetch('books.json');
  const books = await response.json();
  const list = document.getElementById('book-list');
  list.innerHTML = '';

  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" class="book-cover" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Year:</strong> ${book.year}</p>
    `;
    list.appendChild(card);
  });

  // Search filter
  document.getElementById('search').addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    document.querySelectorAll('.book-card').forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value) ? '' : 'none';
    });
  });
}

loadBooks();
