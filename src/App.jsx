import React, { useState, useEffect, useRef } from 'react';
import MovieDisplay from './components/MovieDisplay';
import './App.css';
import './form.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (query = '') => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a631def9`);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  const saveMovie = (movie) => {
    if (!savedMovies.includes(movie)) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Futuristic Movie Search</h1>
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <div className="movie-display">
        <h2>Movies</h2>
        <MovieDisplay movies={movies} saveMovie={saveMovie} />
      </div>

      <div className="saved-movies">
        <h2>Saved Movies</h2>
        {savedMovies.length > 0 ? (
          savedMovies.map((movie) => <p key={movie.id}>{movie.title}</p>)
        ) : (
          <p>No movies saved yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;
