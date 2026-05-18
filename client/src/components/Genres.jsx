import { useLoaderData, Link } from "react-router-dom";
import { getAccessToken } from "../auth";

export async function loader() {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.genres.slice(0, 30);
  } catch (err) {
    console.error("Error fetching auth:", err);
    return [];
  }
}

export default function Genres() {
  const genres = useLoaderData();

  return (
    <div className="genres">
      <h2>Select a Genre</h2>
      <div className="grid">
        {genres.map((genre) => (
          <Link to={`/genres/${genre}`} key={genre} className="card genre-card">
            <div className="card-info genre-info">
              <h3>{genre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
