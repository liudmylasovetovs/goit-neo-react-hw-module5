import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/apiService.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;

// C:\Users\milka\Documents\goitReact\goit-neo-react-hw-module5\src\services\apiServise.js
// src\services\apiServise.js