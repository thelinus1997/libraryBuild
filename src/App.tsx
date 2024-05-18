import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Home from "./components/Home/Home";
import { Link, Route, Routes } from "react-router-dom";
import Searchbar from "./components/SearchContainer/SearchBar/SearchBar";
import FavoriteBooks from "./components/FavoriteBooks/FavoriteBooks";
import FavoriteAuthors from "./components/FavoriteAuthors/FavoriteAuthors";

import SearchContainer from "./components/SearchContainer/SearchContainer";
import SpecificBook from "./components/SpecificBook/SpecificBook";
import MyPages from "./components/MyPages/MyPages";

function App() {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full border border-indigo-600">
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
          <li className="text-lg no-underline ml-6">
            <Link to="/mypages">My page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/favbooks" element={<FavoriteBooks />} />
        <Route path="/favauthors" element={<FavoriteAuthors />} />
        <Route path="/specificBook" element={<SpecificBook />} />
        <Route path="/mypages" element={<MyPages />} />
      </Routes>
    </>
  );
}

export default App;
