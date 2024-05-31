// Configuration for spoonacular API
// Read more about the API here: https://spoonacular.com/food-api/docs

const API_URL = "https://api.spoonacular.com/";
const API_KEY = 'YOUR_API_KEY';//process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}recipes/complexSearch?apiKey=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}recipes/complexSearch?apiKey=${API_KEY}&sort=random`;

const PAGE_SIZE = 12;

export {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  PAGE_SIZE,
};
