import { useLoaderData } from "react-router-dom";
import { getAccessToken } from "../auth";

export async function loader({ params }) {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${params.id}/tracks`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return { items: data.items || [], id: params.id };
  } catch (err) {
    console.error("Error fetching auth:", err);
    return { items: [], id: params.id };
  }
}

export default function PlaylistTracks() {
  const { items, id } = useLoaderData();

  return (
    <div className="tracks-view">
      <h2 className="title">Playlist Tracks</h2>
      <div className="track-list">
        {items.map((item, index) => {
          const track = item.track;
          if (!track) return null;

          return (
            <div key={`${track.id}-${index}`} className="row">
              <img src={track.album.images[2]?.url} alt={track.name} />
              <div className="track-info">
                <h3>{track.name}</h3>
                <p>{track.artists[0].name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
