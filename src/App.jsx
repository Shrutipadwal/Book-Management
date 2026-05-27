import { useEffect, useState, useRef } from "react";
import axios from "axios";
import API_URL from "./services/api";

import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";

import "./styles/styles.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // TOAST STATE
  const [toast, setToast] = useState("");

  // refs
  const formRef = useRef(null);
  const listRef = useRef(null);

  // FETCH
  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);
      setBooks(response.data);

    } catch {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // TOAST FUNCTION
  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  // ADD
  const addBook = async (newBook) => {
    try {
      await axios.post(API_URL, newBook);
      fetchBooks();
      showToast(" Book Added Successfully");
    } catch {
      setError("Failed to add book");
    }
  };

  // UPDATE
  const updateBook = async (updatedBook) => {
    try {
      await axios.put(`${API_URL}/${updatedBook.id}`, updatedBook);

      setSelectedBook(null);
      fetchBooks();

      showToast(" Book Updated Successfully");

      setTimeout(() => {
        listRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);

    } catch {
      setError("Failed to update book");
    }
  };

  // DELETE
  const deleteBook = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this book?"
      );

      if (!confirmDelete) return;

      setDeletingId(id);

      await axios.delete(`${API_URL}/${id}`);

      setBooks((prev) =>
        prev.filter((book) => book.id !== id)
      );

      showToast("Book Deleted Successfully");

    } catch {
      setError("Failed to delete book");
    } finally {
      setDeletingId(null);
    }
  };

  // EDIT
  const handleEdit = (book) => {
    setSelectedBook(book);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const genres = [...new Set(books.map((b) => b.genre))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "" || book.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app">
      <h1 className="heading">Book Management System</h1>

   
      {toast && <div className="toast">{toast}</div>}

      <BookForm
        addBook={addBook}
        updateBook={updateBook}
        selectedBook={selectedBook}
        formRef={formRef}
      />

      <div className="filter-section">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <GenreFilter
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          genres={genres}
        />
      </div>

      {loading && <p className="info">Loading books...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && filteredBooks.length === 0 && (
        <p className="info">No books found</p>
      )}

      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        setSelectedBook={handleEdit}
        deletingId={deletingId}
        listRef={listRef}
      />
    </div>
  );
}

export default App;