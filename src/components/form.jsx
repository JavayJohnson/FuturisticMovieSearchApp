import React, { useState } from 'react';

const Form = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (query) => {
    const apiKey = 'a631def9'; // Your OMDb API key
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]); // Handle no results found
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      fetchMovies(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default Form;
