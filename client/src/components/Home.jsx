import { Link } from "react-router-dom";

export default function Home() {
  const fetchFeatured = async () => {};

  const fetchGenres = async () => {};

  const handleFeatured = () => {};

  const handleGenres = () => {};

  return (
    <div className="home">
      <h2>Welcome to The Vibe Engine</h2>
      <div className="actionBtns">
        <Link to="/featured" onClick={handleFeatured} className="mainBtn">
          View Featured Playlists
        </Link>
        <Link to="/genres" onClick={handleGenres} className="mainBtn">
          Pick a Genre
        </Link>
      </div>
    </div>
  );
}
