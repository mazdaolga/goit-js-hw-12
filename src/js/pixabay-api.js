import axios from 'axios';

const API_KEY = '44502992-491f023f405adfa93e793762c';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImages(searchQuery, page = 1, perPage = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });

  const userUrl = `${BASE_URL}?${params}`;

  const response = await axios.get(userUrl);
  return response.data;
}
