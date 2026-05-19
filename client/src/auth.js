export async function getAccessToken() {
  const currentToken = localStorage.getItem("spotify_access_token");
  const expiryTime = localStorage.getItem("spotify_token_expiry");

  // Check if a token exists and has not expired yet
  if (currentToken && expiryTime && Date.now() < parseInt(expiryTime, 10)) {
    return currentToken;
  }

  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const credentials = btoa(`${clientId}:${secret}`);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Spotify Auth Error: ${errorData.error_description || errorData.error}`,
    );
  }

  const data = await response.json();

  localStorage.setItem("spotify_access_token", data.access_token);
  // Set expiry time (current time + expires_in seconds)
  localStorage.setItem(
    "spotify_token_expiry",
    (Date.now() + data.expires_in * 1000).toString(),
  );

  return data.access_token;
}
