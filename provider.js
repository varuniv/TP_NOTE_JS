import { API_URL } from "./config.js";

export async function fetchCharacters() {
    const response = await fetch(API_URL);
    return response.json();
}