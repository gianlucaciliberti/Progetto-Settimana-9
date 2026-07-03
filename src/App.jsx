import MyNavbar from './components/Navbar';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState({
    harryPotter: [],
    starWars: [],
    batman: []
  });
  const searchMovies = async (query, category) => {
  };

  return (
    <>
      <MyNavbar onSearch={searchMovies} />
      <MovieSection movies={movies} />
      <Footer />
    </>
  )
}

export default App;

const searchMovies = async (query, category) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
  const data = await res.json();
  setMovies(prev => ({
    ...prev, [category]: data.Search || []
  }));
};