# The Vibe Engine

The Vibe Engine is a modern React single-page application designed for exploring music content directly from the Spotify API. It leverages React Router's powerful Data API (loaders) for efficient and declarative data fetching, allowing users to browse featured playlists, discover various genres, and view tracks within them without requiring user authentication.

## ✨ Features

*   **Spotify API Integration:** Seamlessly connects to the Spotify Web API to fetch a wide range of music data.
*   **Featured Playlists:** Browse a curated list of featured playlists directly from Spotify.
*   **Genre Exploration:** Discover and explore a diverse range of music genres.
*   **Track Listings:** View individual tracks within selected featured playlists or specific genres.
*   **React Router Data API:** Utilizes React Router v6.4+ `loaders` for declarative and efficient server-side data fetching directly within route definitions, enhancing performance and code organization.
*   **Client Credentials Flow:** Authenticates with Spotify using the client credentials grant type, eliminating the need for user login and providing read-only access to public Spotify data.
*   **Responsive Design:** (Implied, but not explicitly in code. Good to mention as a general SPA goal)

## 🚀 Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router v6.4+:** For client-side routing, utilizing the new Data API (loaders).
*   **Spotify Web API:** The primary data source for music content.
*   **Vite:** A fast development server and build tool (implied by `import.meta.env`).
*   **JavaScript (ESM):** Modern JavaScript for application logic.
*   **CSS:** For styling the application.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** (LTS version recommended) [Download Node.js](https://nodejs.org/)
*   **npm** or **Yarn:** Package managers included with Node.js.
*   **Spotify Developer Account:** You will need a free Spotify Developer Account to obtain your Client ID and Client Secret for API access.
    *   [Spotify for Developers](https://developer.spotify.com/)

## ⚙️ Installation

Follow these steps to set up and run The Vibe Engine locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/the-vibe-engine.git
    cd the-vibe-engine
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project directory. This file will store your Spotify API credentials.

    ```env
    VITE_SPOTIFY_CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
    VITE_SPOTIFY_CLIENT_SECRET=YOUR_SPOTIFY_CLIENT_SECRET
    ```
    *   Replace `YOUR_SPOTIFY_CLIENT_ID` and `YOUR_SPOTIFY_CLIENT_SECRET` with the credentials you obtained from your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).

## 🏃‍♀️ Usage

1.  **Start the development server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```

2.  Open your web browser and navigate to `http://localhost:5173` (or the URL indicated in your terminal).

3.  Explore the application:
    *   The homepage (`/`) provides an entry point.
    *   Navigate to `/featured` to browse Spotify's featured playlists.
    *   Go to `/genres` to explore various music genres.
    *   Click on any featured playlist or genre to view the tracks associated with it.

## 📂 Project Structure (Key Files)

*   `src/main.jsx`: The main entry point of the application, responsible for defining the React Router routes and their associated data loaders.
*   `src/App.jsx`: The root layout component that provides a consistent header and renders nested route components via `Outlet`.
*   `src/auth.js`: Contains the logic for authenticating with the Spotify API using the client credentials flow and managing the access token.
*   `src/components/`: A directory housing various React components, including `Home`, `Header`, `Featured`, `Genres`, `GenreTracks`, and `PlaylistTracks`.
*   `src/index.css`: Global styles for the application.
*   `src/App.css`: Specific styles for the `App` component layout.

## 🤝 Contributing

Contributions are welcome! If you have suggestions, bug reports, or want to add new features, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgements

*   **Spotify Web API** for providing the vast music data.
*   **React** and **React Router** for building dynamic user interfaces.
*   **Vite** for a blazing fast development experience.