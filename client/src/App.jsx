import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
