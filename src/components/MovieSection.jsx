import { Row, Col } from "react-bootstrap";

function MovieSection({ title, movies, onMovieClick }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white" }}>{title}</h2>

      <Row>
        {movies.slice(0, 6).map((movie) => (
          <Col
            key={movie.imdbID}
            xs={6}
            md={4}
            lg={2}
            className="mb-3"
          >
            <div
              className="movie-card"
              onClick={() => onMovieClick(movie)}
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/150"
                }
                alt={movie.Title}
                className="img-fluid"
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieSection;