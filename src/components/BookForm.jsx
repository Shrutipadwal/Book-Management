import { useEffect, useState } from "react";

function BookForm({ addBook, selectedBook, updateBook, formRef }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  // validation errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedBook) {
      setFormData({
        title: selectedBook.title,
        author: selectedBook.author,
        genre: selectedBook.genre,
        year: selectedBook.year,
        id: selectedBook.id,
      });
    } else {
      setFormData({
        title: "",
        author: "",
        genre: "",
        year: "",
      });
    }

    setErrors({});
  }, [selectedBook]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //VALIDATION FUNCTION
  const validate = () => {
    let tempErrors = {};
    const currentYear = new Date().getFullYear();

    if (!formData.title.trim()) tempErrors.title = "Title is required";
    if (!formData.author.trim()) tempErrors.author = "Author is required";
    if (!formData.genre.trim()) tempErrors.genre = "Genre is required";

    if (!formData.year.trim()) {
      tempErrors.year = "Year is required";
    } else if (isNaN(formData.year)) {
      tempErrors.year = "Year must be a number";
    } else if (formData.year < 1000 || formData.year > currentYear) {
      tempErrors.year = `Year must be between 1000 and ${currentYear}`;
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // stop if invalid
    if (!validate()) return;

    if (selectedBook) {
      await updateBook(formData);
    } else {
      await addBook(formData);
    }

    setFormData({
      title: "",
      author: "",
      genre: "",
      year: "",
    });

    setErrors({});
  };

  return (
    <div className="form-container" ref={formRef}>
      <h2>{selectedBook ? "Update Book" : "Add Book"}</h2>

      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.title && <p className="error">{errors.title}</p>}

        <input
          type="text"
          name="author"
          placeholder="Enter author"
          value={formData.author}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.author && <p className="error">{errors.author}</p>}

        <input
          type="text"
          name="genre"
          placeholder="Enter genre"
          value={formData.genre}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.genre && <p className="error">{errors.genre}</p>}

        <input
          type="text"
          name="year"
          placeholder="Enter year"
          value={formData.year}
          onChange={handleChange}
          autoComplete="off"
        />
        {errors.year && <p className="error">{errors.year}</p>}

        <button
          type="submit"
          className={selectedBook ? "update-btn" : "add-btn"}
        >
          {selectedBook ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
}

export default BookForm;