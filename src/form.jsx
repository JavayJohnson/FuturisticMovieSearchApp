import React, { useState } from 'react';

const Form = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (query) => {
    const apiKey = 'a631def9'; // Replace with your actual TMDb API key
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=a631def9`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results || []);
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
