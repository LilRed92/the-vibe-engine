import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <h1>The Vibe Engine</h1>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </nav>
    </header>
  );
}
