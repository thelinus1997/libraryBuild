import { searchAuthor, searchBookTitle } from "../API/libraryApi";
import { setSearchResult } from "../Slices/searchSlice";

export const useSearch = async (
  searchTerm: string,
  searchType: string,
  dispatch: any
) => {
  const fixedSearchTerm = searchTerm.replace(/ /g, "+");
  if (searchType === "title") {
    const response = await searchBookTitle(fixedSearchTerm);
    console.log(response);
    dispatch(setSearchResult({ type: searchType, title: response.docs }));
  } else if (searchType === "author") {
    const response = await searchAuthor(fixedSearchTerm);
    dispatch(setSearchResult({ type: searchType, author: response.docs }));
  }
};
