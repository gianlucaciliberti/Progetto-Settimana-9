import { useEffect, useState } from "react";
import MyNavbar from "./components/Navbar";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";

function App() {
  const [categories, setCategories] = useState({
    harryPotter: [],
    matrix: [],
    batman: []
  });

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const API_KEY = "64069e6d";

  // 🔎 SEARCH GLOBALE
  const searchMovies = async (query) => {
    if (!query) {
      setIsSearching(false);
      return;
    }

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );

    const data = await res.json();

    setSearchResults(data.Search || []);
    setIsSearching(true);
  };

  // 🏠 CARICAMENTO CATEGORIE HOME
  useEffect(() => {
    const getCategory = async (query) => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await res.json();
      return data.Search || [];
    };

    const loadCategories = async () => {
      setCategories({
        harryPotter: await getCategory("harry potter"),
        matrix: await getCategory("matrix"),
        batman: await getCategory("batman")
      });
    };

    loadCategories();
  }, []);

  return (
    <>
      <MyNavbar onSearch={searchMovies} />

      {isSearching ? (
        <MovieSection title="Search Results" movies={searchResults} />
      ) : (
        <>
          <MovieSection title="Harry Potter" movies={categories.harryPotter} />
          <MovieSection title="Matrix" movies={categories.matrix} />
          <MovieSection title="Batman" movies={categories.batman} />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;