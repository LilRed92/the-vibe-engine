export async function getAccessToken() {
  const currentToken = localStorage.getItem("spotify_access_token");
  if (currentToken) return currentToken;

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

  const data = await response.json();

  localStorage.setItem("spotify_access_token", data.access_token);

  return data.access_token;
}
