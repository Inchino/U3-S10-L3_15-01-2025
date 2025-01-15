import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import Banner from "./components/Banner";
import TrendingNow from "./components/TrendingNow";
import WatchItAgain from "./components/WatchItAgain";
import NewReleases from "./components/NewReleases";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvShows from "./components/TvShows";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NetflixNavbar />
    <Container fluid className="px-4">
      <Banner />
      <Routes>
      <Route path="/tvshows" element={<TvShows />} />
      </Routes>
      <TrendingNow />
      <WatchItAgain />
      <NewReleases />
      <NetflixFooter />
    </Container>
  </BrowserRouter>
);
