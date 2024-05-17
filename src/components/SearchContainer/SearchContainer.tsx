import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ResultContainer from "./ResultContainer/ResultContainer";

const SearchContainer = () => {
  const [searchChoice, setSearchChoice] = useState<string>();

  const handleClick = (choice: string) => {
    setSearchChoice(choice);
  };
  useEffect(() => {
    console.log(searchChoice);
  }, [searchChoice]);
  return (
    <div>
      <nav>
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full border border-indigo-600">
          <div className="mb-2 sm:mb-0">
            <div className="text-2xl no-underline"></div>
          </div>
          <ul className="flex">
            <li
              onClick={() => handleClick("books")}
              className="text-lg no-underline ml-6 text-indigo-600 cursor-pointer"
            >
              Search for books
            </li>
            <li
              onClick={() => handleClick("authors")}
              className="text-lg no-underline ml-6 text-indigo-600 cursor-pointer"
            >
              Search for authors
            </li>
          </ul>
        </nav>
      </nav>
      {searchChoice && (
        <>
          <SearchBar choice={searchChoice} />
          <ResultContainer choice={searchChoice} />
        </>
      )}
    </div>
  );
};

export default SearchContainer;
