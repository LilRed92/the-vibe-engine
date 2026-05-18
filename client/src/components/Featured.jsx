import { useLoaderData, Link } from "react-router-dom";
import { getAccessToken } from "../auth";

export async function loader() {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.playlists.items;
  } catch (err) {
    console.error("Error fetching auth:", err);
    return [];
  }
}

export default function Featured() {
  const featured = useLoaderData();

  return (
    <div className="featured">
      <h2>Featured Playlists</h2>
      <div className="grid">
        {featured.map((playlist) => (
          <Link
            to={`/featured/${playlist.id}`}
            key={playlist.id}
            className="card"
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
