import React, { useState } from "react";
import { movies, Movie } from "../data/movies";
import { Button } from "../components/Button";
import { MovieCard } from "../components/MovieCard";
import styles from "./styles/Movies.module.css";
import { useDevice } from "../hooks/useDevice";

export const Movies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [showMobileWatchList, setShowMobileWatchList] =
    useState<boolean>(false);

  const [watchList, setWatchList] = useState<Movie[]>([]);
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
    setSearchTerm(e.target.value);
  };

  const addToWatchList = (movie: Movie) => {
    if (!watchList.find((m) => m.id === movie.id)) {
      setWatchList([...watchList, movie]);
    }
  };

  const clearWatchList = () => {
    setWatchList([]);
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
      {device === "mobile" && (
        <Button onClick={() => setShowMobileWatchList(!showMobileWatchList)}>
          {showMobileWatchList ? "Show Movies" : "Show Watchlist"}
        </Button>
      )}
      <div className={styles.moviesSection}>
        {device === "desktop" && (
          <>
            <div className={styles.moviesList}>
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  addToWatchList={addToWatchList}
                />
              ))}
            </div>
            <div className={styles.sideBar}>
              <h2>Your Watchlist</h2>
              {watchList.length === 0 ? (
                <p>No movies in your watchlist.</p>
              ) : (
                <>
                  {watchList.map((movie) => (
                    <div key={movie.id} className={styles.watchListItem}>
                      {movie.title} ({movie.year})
                    </div>
                  ))}
                  <Button onClick={clearWatchList}>Clear Watchlist</Button>
                </>
              )}
            </div>
          </>
        )}
        {device === "mobile" && (
          <>
            {showMobileWatchList ? (
              <div className={styles.sideBar}>
                <h2>Your Watchlist</h2>
                {watchList.length === 0 ? (
                  <p>No movies in your watchlist.</p>
                ) : (
                  <>
                    {watchList.map((movie) => (
                      <div key={movie.id} className={styles.watchListItem}>
                        {movie.title} ({movie.year})
                      </div>
                    ))}
                    <Button onClick={clearWatchList}>Clear Watchlist</Button>
                  </>
                )}
              </div>
            ) : (
              <div className={styles.moviesList}>
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    addToWatchList={addToWatchList}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
