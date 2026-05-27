function GenreFilter({ selectedGenre, setSelectedGenre, genres }) {
  return (
    <select
      className="genre-filter"
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="">All Genres</option>

      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;