export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  rating: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    director: "Frank Darabont",
    rating: 9.3,
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    director: "Francis Ford Coppola",
    rating: 9.2,
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    director: "Christopher Nolan",
    rating: 9.0,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    director: "Quentin Tarantino",
    rating: 8.9,
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    director: "Robert Zemeckis",
    rating: 8.8,
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    director: "Wachowski Brothers",
    rating: 8.7,
  },
  {
    id: 8,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
    director: "Martin Scorsese",
    rating: 8.7,
  },
  {
    id: 9,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    director: "Christopher Nolan",
    rating: 8.6,
  },
  {
    id: 10,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: "Thriller",
    director: "Jonathan Demme",
    rating: 8.6,
  },
];
