import { useDispatch } from "react-redux";
import * as AuthorTypes from "../types/authorType";
import * as TitleTypes from "../types/titleType";
import { addFavoriteAuthor } from "../Slices/favAuthorSlice";
import { addFavoriteBook, removeFavoriteBook } from "../Slices/favBookSlice";
export const useFavorite = (
  itemToFavorite: TitleTypes.Doc | AuthorTypes.Doc,
  favoriteType: string,
  dispatch: any,
  inputType: string
) => {
  if (favoriteType === "book") {
    console.log("Favoriting a book");

    if (itemToFavorite) {
      if (inputType === "add") {
        dispatch(addFavoriteBook({ book: itemToFavorite }));
      } else if (inputType === "remove") {
        dispatch(removeFavoriteBook({ book: itemToFavorite }));
      }
    }
  } else if (favoriteType === "author") {
    console.log("Favoriting an author");
    if (
      itemToFavorite &&
      itemToFavorite.author_name &&
      itemToFavorite.author_name.length > 0
    ) {
      const favoriteAuthorName = itemToFavorite.author_name[0];
      console.log(favoriteAuthorName);
      dispatch(addFavoriteAuthor({ authorName: favoriteAuthorName }));
    }

    // dispatch(addFavoriteAuthor({ authorName: itemToFavorite.author_name }));
  }
};
