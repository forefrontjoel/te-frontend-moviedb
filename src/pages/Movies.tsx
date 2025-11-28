import React, { useState } from "react";
import { movies, Movie } from "../data/movies";
import { Button } from "../components/Button";
import { MovieCard } from "../components/MovieCard";
import styles from "./styles/Movies.module.css";
import { useDevice } from "../hooks/useDevice";

export const Movies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const device = useDevice();

  const handleSearch = () => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Auto-filter as user types
    if (value === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase()) ||
          movie.director.toLowerCase().includes(value.toLowerCase()) ||
          movie.genre.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className={styles.moviesContainer}>
      <div className={styles.header}>
        <h1>Movie Database - {device}</h1>
        <div className={styles.resultsCount}>
          {filteredMovies.length}{" "}
          {filteredMovies.length === 1 ? "movie" : "movies"} found
        </div>
      </div>

      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search by title, director, or genre..."
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className={styles.moviesList}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
