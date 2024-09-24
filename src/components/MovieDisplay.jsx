import React from 'react';

const MovieDisplay = ({ movies }) => {
  return (
    <div className="movie-display">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            {movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: "150px" }}
              />
            ) : (
              <p>No poster available</p>
            )}
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieDisplay;
