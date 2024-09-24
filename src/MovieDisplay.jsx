import React from 'react';

const MovieDisplay = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieDisplay;
