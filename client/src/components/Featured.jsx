import { useLoaderData, Link } from "react-router-dom";
import { getAccessToken } from "../auth";

export async function loader() {
  try {
    const accessToken = await getAccessToken();

    // After many blocks and issues due to Spotify's changes to their APIs, necessary credentials, and errors throughout. I decided to change my original idea to featured albums instead of playlists. Maybe future updates can include playlists, but for now it is out of scope for this project.
    const response = await fetch(
      "https://api.spotify.com/v1/search?q=vibes&type=album&limit=10",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Spotify Error: ${errorData.error?.message || response.status}`,
      );
    }

    const data = await response.json();

    return data.albums?.items || [];
  } catch (err) {
    console.error("Error fetching featured albums:", err);
    return [];
  }
}

export default function Featured() {
  const featured = useLoaderData();

  return (
    <div className="featured">
      <h2>Featured Albums</h2>
      <div className="grid">
        {featured.map((album) => (
          <Link to={`/featured/${album.id}`} key={album.id} className="card">
            <img src={album.images[0]?.url || ""} alt={album.name} />
            <div className="card-info">
              <h3>{album.name}</h3>
              <p>{album.artists[0]?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
