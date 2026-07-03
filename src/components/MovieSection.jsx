function MovieSection({ title, movies }) {
    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ color: "white" }}>{title}</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: "10px"
                }}
            >
                {movies.slice(0, 6).map((movie) => (
                    <div key={movie.imdbID} className="movie-card">
                        <img
                            src={
                                movie.Poster !== "N/A"
                                    ? movie.Poster
                                    : "https://via.placeholder.com/150"
                            }
                            alt={movie.Title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieSection;