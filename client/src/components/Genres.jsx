import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Genres({ auth }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/recommendations/available-genre-seeds",
          {
            headers: { Authorization: `Bearer ${auth}` },
          },
        );
        const data = await response.json();
        setGenres(data.genres.slice(0, 30));
      } catch (error) {
        console.error(error);
      }
    }

    if (auth) {
      fetchGenres();
    }
  }, [auth]);

  return (
    <div className="genres">
      <h2>Select a Genre</h2>
      <div className="masonry-grid">
        {genres.map((genre) => (
          <Link
            to={`/genres/${genre}`}
            key={genre}
            className="grid-card genre-card"
          >
            <div className="card-info genre-info">
              <h3>{genre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
