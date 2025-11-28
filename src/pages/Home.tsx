import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Movie Database!</h1>
      <nav className={styles.nav}>
        <Link to="/movies" className={styles.navLink}>
          Browse Movies
        </Link>
      </nav>
    </div>
  );
};
