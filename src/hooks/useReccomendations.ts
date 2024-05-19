import { searchAuthor } from "../API/libraryApi";
import { createNestedArray } from "./useNestedArray";

export const useRecommendations = async (favAuthorArray: string[]) => {
  const returnArray: any[] = [];
  for (let i = 0; i < favAuthorArray.length; i++) {
    const response = await searchAuthor(favAuthorArray[i]);
    const nestedArray = createNestedArray(response.docs);
    if (nestedArray) {
      returnArray.push(
        nestedArray[Math.floor(Math.random() * nestedArray.length)]
      );
    }
  }
  console.log(returnArray);
  return returnArray;
};
