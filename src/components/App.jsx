import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movie from "./Movie";
import Movies from "./Movies";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;