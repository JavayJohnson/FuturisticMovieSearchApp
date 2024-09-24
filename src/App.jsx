import React, { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div className="app-container">
      <h1>Movie Search App</h1>
      <Form setMovies={setMovies} />
      <MovieDisplay movies={movies} />
    </div>
  );
};

export default App;
