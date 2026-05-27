function BookCard({
  book,
  deleteBook,
  setSelectedBook,
}) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Genre:</strong> {book.genre}
      </p>

      <p>
        <strong>Year:</strong> {book.year}
      </p>

      <div className="button-group">
        <button
          className="edit-btn"
          onClick={() => setSelectedBook(book)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteBook(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;