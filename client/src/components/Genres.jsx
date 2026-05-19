import { useLoaderData, Link } from "react-router-dom";

// Providing a static list of popular genres as a workaround to Spotify restricting the /recommendations/available-genre-seeds endpoint
export async function loader() {
  return [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "ambient",
    "anime",
    "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
  ];
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
