import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import styles from "./styles/App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/movies" className={styles.navLink}>
            Movies
          </Link>
        </nav>

        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
