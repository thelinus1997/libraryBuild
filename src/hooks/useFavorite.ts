import { useDispatch } from "react-redux";
import * as AuthorTypes from "../types/authorType";
import * as TitleTypes from "../types/titleType";
import {
  addFavoriteAuthor,
  removeFavoriteAuthor,
} from "../Slices/favAuthorSlice";
import { addFavoriteBook, removeFavoriteBook } from "../Slices/favBookSlice";
export const useFavorite = (
  favoriteType: string,
  dispatch: any,
  inputType: string,
  itemToFavorite: TitleTypes.Doc | AuthorTypes.Doc | string
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
    if (typeof itemToFavorite !== "string") {
      if (
        itemToFavorite &&
        itemToFavorite.author_name &&
        itemToFavorite.author_name.length > 0
      ) {
        if (inputType === "add") {
          const favoriteAuthorName = itemToFavorite.author_name[0];
          console.log(favoriteAuthorName);
          dispatch(addFavoriteAuthor({ authorName: favoriteAuthorName }));
        }
      }
    } else if (typeof itemToFavorite === "string" && inputType === "remove") {
      dispatch(removeFavoriteAuthor({ authorName: itemToFavorite }));
    } else if (typeof itemToFavorite === "string" && inputType === "add") {
      dispatch(addFavoriteAuthor({ authorName: itemToFavorite }));
    }
  }
};
