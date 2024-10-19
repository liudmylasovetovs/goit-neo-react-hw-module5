import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzQ2NTE0N2UxMzA4YTFhOTcxYmMzMDJlMTg1NTFhYyIsIm5iZiI6MTcyOTMxMzM1Mi40MTQyOTgsInN1YiI6IjY3MTMzN2JjNjUwMjQ4YjlkYjYxZDc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLGMxmyUWEybHhaojsnLmhPsFSdfyI3uMvRZPmxwJKE";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
  timeout: 10000,
});

export const fetchMovieDetails = (movieId) => {
  return apiClient.get(`/movie/${movieId}`);
};

export const fetchMovieCast = (movieId) => {
  return apiClient.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = (movieId) => {
  return apiClient.get(`/movie/${movieId}/reviews`);
};

export const searchMovies = (query) => {
  return apiClient.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
};

export const fetchTrendingMovies = () => {
  return apiClient.get("/trending/movie/day");
};
