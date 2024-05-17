import axios from "axios";
const authorUrl = "https://openlibrary.org/search/authors.json?q=";
export const getAuthorData = async (input: string) => {
  try {
    const response = await axios.get(`${authorUrl}${input}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
