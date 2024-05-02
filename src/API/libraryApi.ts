import axios from "axios";
const titleUrl = "https://openlibrary.org/search.json?title";

export async function searchBookTitle(input: string) {
  try {
    const response = await axios.get(`${titleUrl}=${input}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
