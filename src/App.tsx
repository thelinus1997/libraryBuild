import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Home from "./components/Home/Home";
import { Link, Route, Routes } from "react-router-dom";
import Searchbar from "./components/SearchBar/SearchBar";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";
import FavoriteAuthors from "./components/FavoriteAuthors/FavoriteAuthors";

function App() {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="#" className="text-2xl no-underline">
            <Link to="/">Home</Link>
          </a>
        </div>
        <div>
          <a href="#" className="text-lg no-underline ml-6">
            <Link to="/search">Search</Link>
          </a>
          <a href="#" className="text-lg no-underline ml-6">
            <Link to="/favbooks">Favorite books</Link>
          </a>
          <a href="#" className="text-lg no-underline ml-6">
            <Link to="/favauthors">Favorite authors</Link>
          </a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/favbooks" element={<FavoriteBooks />} />
        <Route path="/favauthors" element={<FavoriteAuthors />} />
      </Routes>
    </>
  );
}

export default App;
