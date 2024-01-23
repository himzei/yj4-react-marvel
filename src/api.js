const BASE_URL = "https://gateway.marvel.com:443/v1/public";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function apiGetComics({ queryKey }) {
  const { limit } = queryKey[1];
  try {
    return await fetch(`${BASE_URL}/comics?limit=${limit}&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiGetCharacters({ queryKey }) {
  const { limit } = queryKey[1];
  try {
    return await fetch(
      `${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiGetEvents({ pageParam = 0 }) {
  const offset = parseInt(pageParam) * 10;

  try {
    return await fetch(
      `${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
