import React from "react";
import { Movie } from "../data/movies";
import styles from "./styles/MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
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
    </div>
  );
};
