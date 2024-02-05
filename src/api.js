const BASE_URL = "https://gateway.marvel.com:443/v1/public";
export const API_KEY = import.meta.env.VITE_API_KEY;
import qs from "qs";

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

export async function apiGetComicsDetail(id) {
  try {
    return await fetch(`${BASE_URL}/comics/${id}?apikey=${API_KEY}`, {
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

export async function apiGetCharacterDetail(id) {
  try {
    return await fetch(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
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

export async function apiGetEventDetail(id) {
  try {
    return await fetch(`${BASE_URL}/events/${id}?apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiGetCreators({ limit }) {
  try {
    return await fetch(
      `${BASE_URL}/creators?limit=${limit}&apikey=${API_KEY}`,
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

export async function apiPostGoogleEmail(data) {
  // const formData = new FormData();
  // formData.append("name", data.name);
  // formData.append("email", data.email);
  // formData.append("message", data.message);

  // console.log(JSON.stringify(data));
  try {
    return await fetch(
      "https://script.google.com/macros/s/AKfycbxTfW8eHeM_vNjGAPPhjlyskqwHSuKGq_Cs8IZ7Yy2DSbfrCsn5h5akI77nHQ1g1lVb/exec",
      {
        method: "post",
        headers: {
          "Content-Type": `application/x-www-form-urlencoded`,
        },

        body: qs.stringify(data),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
