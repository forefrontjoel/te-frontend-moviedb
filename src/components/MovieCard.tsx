import React from "react";
import { Movie } from "../data/movies";
import styles from "./styles/MovieCard.module.css";
import { Button } from "./Button";

interface MovieCardProps {
  movie: Movie;
  addToWatchList: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  addToWatchList,
}) => {
  return (
    <div className={styles.movieCard}>
      <h3>{movie.title}</h3>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}/10
      </p>
      <Button onClick={() => addToWatchList(movie)}>Add to watchlist</Button>
    </div>
  );
};
