import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to The Vibe Engine</h2>
      <div className="actionBtns">
        <Link to="/featured" className="mainBtn">
          View Featured Albums
        </Link>
        <Link to="/genres" className="mainBtn">
          Pick a Genre
        </Link>
      </div>
    </div>
  );
}
