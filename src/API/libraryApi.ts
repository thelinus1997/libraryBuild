import axios from "axios";
import { TitleSearchTypes } from "../types/titleType";
const titleUrl = "https://openlibrary.org/search.json?title";

export async function searchBookTitle(input: string) {
  try {
    const response = await axios.get(`${titleUrl}=${input}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
