import { useLoaderData } from "react-router-dom";
import { getAccessToken } from "../auth";

export async function loader({ params }) {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/recommendations?seed_genres=${params.id}&limit=20`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return { tracks: data.tracks || [], id: params.id };
  } catch (err) {
    console.error("Error fetching auth:", err);
    return { tracks: [], id: params.id };
  }
}

export default function GenreTracks() {
  const { tracks, id } = useLoaderData();

  return (
    <div className="tracks-view">
      <h2 className="title">{id} Vibes</h2>
      <div className="track-list">
        {tracks.map((track) => (
          <div key={track.id} className="row">
            <img src={track.album.images[2]?.url} alt={track.name} />
            <div className="track-info">
              <h3>{track.name}</h3>
              <p>{track.artists[0].name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
