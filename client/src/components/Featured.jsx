import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Featured({ auth }) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    async function fetchFeaturedPlaylists() {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: { Authorization: `Bearer ${auth}` },
          },
        );
        const data = await response.json();
        setFeatured(data.playlists.items);
      } catch (error) {
        console.error(error);
      }
    }

    if (auth) {
      fetchFeaturedPlaylists();
    }
  }, [auth]);

  return (
    <div className="featured-view">
      <h2>Featured Playlists</h2>
      <div className="masonry-grid">
        {featured.map((playlist) => (
          <Link
            to={`/featured/${playlist.id}`}
            key={playlist.id}
            className="grid-card"
          >
            <img src={playlist.images[0]?.url} alt={playlist.name} />
            <div className="card-info">
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
