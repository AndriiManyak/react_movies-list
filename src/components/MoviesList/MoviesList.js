import React from 'react';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from '../shapes/MoviesListShape';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;
