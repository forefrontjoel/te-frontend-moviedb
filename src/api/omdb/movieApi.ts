import { Movie, MovieDetails } from "../../data/movies";

const API_URL = "https://www.omdbapi.com/";

function getApiKey(): string {
  const apiKey = ""; // TODO: Add your API key here

  if (!apiKey) {
    throw new Error("API key missing!");
  }

  return apiKey;
}

interface MovieResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetailsResult {
  Response: "True" | "False";
  Error?: string;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Plot: string;
  imdbRating: string;
}

interface SearchResponse {
  Search?: MovieResult[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}

function convertToMovie(apiMovie: MovieResult): Movie {
  return {
    id: apiMovie.imdbID,
    title: apiMovie.Title,
    year: parseInt(apiMovie.Year) || 0,
  };
}

function convertToMovieDetails(apiMovie: MovieDetailsResult): MovieDetails {
  return {
    id: apiMovie.imdbID,
    title: apiMovie.Title,
    year: apiMovie.Year,
    plot: apiMovie.Plot,
    rating: apiMovie.imdbRating,
  };
}

export async function searchMovies(searchTerm: string): Promise<Movie[]> {
  const params = new URLSearchParams({
    apikey: getApiKey(),
    s: searchTerm,
    type: "movie",
  });

  const url = `${API_URL}?${params.toString()}`;
  const response = await fetch(url);
  const data: SearchResponse = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Failed to fetch movies");
  }

  if (data.Search && data.Search.length > 0) {
    return data.Search.map((movie) => convertToMovie(movie));
  }

  return [];
}

export async function getMovieDetails(id: string): Promise<MovieDetails> {
  const params = new URLSearchParams({
    apikey: getApiKey(),
    i: id,
  });

  const url = `${API_URL}?${params.toString()}`;
  const response = await fetch(url);
  const data: MovieDetailsResult = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Failed to fetch movie details");
  }

  return convertToMovieDetails(data);
}
