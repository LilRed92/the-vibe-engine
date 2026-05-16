import { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Genres from "./components/Genres";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [auth, setAuth] = useState("");

  useEffect(() => {
    async function fetchAuth() {
      const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
      const credentials = btoa(`${clientId}:${clientSecret}`);

      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials",
        });

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setAuth(data.access_auth);
      } catch (err) {
        console.error("Error fetching auth:", err);
      }
    }

    fetchAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured auth={auth} />} />
          <Route path="/genres" element={<Genres auth={auth} />} />
          <Route
            path="/featured/:id"
            element={<div className="placeholder">Playlist Tracks Pending</div>}
          />
          <Route
            path="/genres/:id"
            element={<div className="placeholder">Genre Tracks Pending</div>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
