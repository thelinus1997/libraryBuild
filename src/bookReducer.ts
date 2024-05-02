import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "redux";

const initialState = {
  authors: [],
};
type AddFavoriteAuthor = {
  type: "FAV_AUTHOR";
  payload: string;
};
type RemoveFavoriteAuthor = {
  type: "UNFAV_AUTHOR";
  payload: string;
};
type State = {
  authors: string[];
};

export type UnionAction = AddFavoriteAuthor | RemoveFavoriteAuthor;

export const bookReducer: Reducer<State, UnionAction> = (
  state: State = initialState,
  action: UnionAction
) => {
  switch (action.type) {
    case "FAV_AUTHOR":
      return {
        ...state,
        author: [...state.authors, action.payload],
      };
    case "UNFAV_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter((string) => string !== action.payload),
      };

    default:
      return state;
  }
};
