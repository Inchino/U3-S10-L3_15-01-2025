import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvShows from "./components/TvShows";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NetflixNavbar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/tvshows" element={<TvShows />} />
    <Route path="/moviedetails/:movieID" element={<MovieDetails />} />
    </Routes>
    <NetflixFooter />
  </BrowserRouter>
);
