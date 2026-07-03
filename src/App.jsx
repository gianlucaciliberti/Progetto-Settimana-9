import { useEffect, useState } from "react";
import MyNavbar from "./components/Navbar";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import CommentModal from "./components/CommentModal";

function App() {
  const [categories, setCategories] = useState({
    harryPotter: [],
    matrix: [],
    batman: []
  });

  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const API_KEY = "64069e6d";

  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ3YmM4OGNjNzJlOTAwMTU0MzJhOWUiLCJpYXQiOjE3ODMwODYyMTYsImV4cCI6MTc4NDI5NTgxNn0.dklrCdsbiO_edlhWV_Ft95WCMAKS2a5Bu5uuM9ZYIH4";

  // SEARCH GLOBALE
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

  const openComments = async (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movie.imdbID}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });

    const data = await res.json();
    setComments(data);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
    setComments([]);
  };

  const addComment = async (comment, rate) => {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment, rate, elementId: selectedMovie.imdbID
      })
    });

    openComments(selectedMovie);
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
          <MovieSection title="Harry Potter" movies={categories.harryPotter} onMovieClick={openComments} />
          <MovieSection title="Matrix" movies={categories.matrix} onMovieClick={openComments} />
          <MovieSection title="Batman" movies={categories.batman} onMovieClick={openComments} />
        </>
      )}

      <Footer />
      <CommentModal
      show={showModal}
      movie={selectedMovie}
      comments={comments}
      onClose={closeModal}
      onAdd={addComment} />
    </>
  );
}

export default App;