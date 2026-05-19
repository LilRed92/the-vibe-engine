import { useLoaderData } from "react-router-dom";
import { getAccessToken } from "../auth";

export async function loader({ params }) {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${params.id}`,
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
    return { album: data, tracks: data.tracks?.items || [], id: params.id };
  } catch (err) {
    console.error("Error fetching album tracks:", err);
    return { album: null, tracks: [], id: params.id };
  }
}

export default function AlbumTracks() {
  const { album, tracks, id } = useLoaderData();

  return (
    <div className="tracks-view">
      <h2 className="title">{album ? album.name : "Album Tracks"}</h2>
      <div className="track-list">
        {tracks.map((track, index) => {
          return (
            <div key={`${track.id}-${index}`} className="row">
              <img
                src={album?.images?.[2]?.url || album?.images?.[0]?.url || ""}
                alt={track.name}
              />
              <div className="track-info">
                <h3>{track.name}</h3>
                <p>{track.artists[0]?.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
