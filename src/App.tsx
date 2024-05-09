import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Home from "./components/Home/Home";
import { Link, Route, Routes } from "react-router-dom";
import Searchbar from "./components/SearchBar/SearchBar";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";
import FavoriteAuthors from "./components/FavoriteAuthors/FavoriteAuthors";
import ByGenre from "./components/Home/RecommendationContainer/ByGenre/ByGenre";
import ByAuthor from "./components/Home/RecommendationContainer/ByAuthor/ByAuthor";

function App() {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full border border-indigo-600">
        <div className="mb-2 sm:mb-0">
          <div className="text-2xl no-underline">
            <Link to="/">Home</Link>
          </div>
        </div>
        <ul className="flex">
          <li className="text-lg no-underline ml-6">
            <Link to="/search">Search</Link>
          </li>
          <li className="text-lg no-underline ml-6">
            <Link to="/favbooks">Favorite books</Link>
          </li>
          <li className="text-lg no-underline ml-6">
            <Link to="/favauthors">Favorite authors</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/favbooks" element={<FavoriteBooks />} />
        <Route path="/favauthors" element={<FavoriteAuthors />} />
        <Route path="/bygenre" element={<ByGenre />} />
        <Route path="/byauthor" element={<ByAuthor />} />
      </Routes>
    </>
  );
}

export default App;
