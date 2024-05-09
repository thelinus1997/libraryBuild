import { searchAuthor, searchBookTitle } from "../API/libraryApi";
import { setSearchResult } from "../Slices/searchSlice";

export const useSearch = async (searchTerm: string, searchType: string) => {
  const fixedSearchTerm = searchTerm.replace(/ /g, "+");
  if (searchType === "title") {
    const response = await searchBookTitle(fixedSearchTerm);
    setSearchResult({ type: searchType, title: response });
  } else if (searchType === "author") {
    const response = await searchAuthor(fixedSearchTerm);
    setSearchResult({ type: searchType, author: response });
  }
};
