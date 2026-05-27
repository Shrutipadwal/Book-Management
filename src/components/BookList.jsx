import BookCard from "./BookCard";

function BookList({ books, deleteBook, setSelectedBook, listRef }) {
  return (
    <div className="book-list" ref={listRef}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          setSelectedBook={setSelectedBook}
        />
      ))}
    </div>
  );
}

export default BookList;