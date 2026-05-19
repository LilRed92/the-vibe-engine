import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Featured, { loader as featuredLoader } from "./components/Featured.jsx";
import Genres, { loader as genresLoader } from "./components/Genres.jsx";
import GenreTracks, {
  loader as genreTracksLoader,
} from "./components/GenreTracks.jsx";
import AlbumTracks, {
  loader as albumTracksLoader,
} from "./components/AlbumTracks.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "featured", element: <Featured />, loader: featuredLoader },
      { path: "genres", element: <Genres />, loader: genresLoader },
      {
        path: "featured/:id",
        element: <AlbumTracks />,
        loader: albumTracksLoader,
      },
      {
        path: "genres/:id",
        element: <GenreTracks />,
        loader: genreTracksLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
