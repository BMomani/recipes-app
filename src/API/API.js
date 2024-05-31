import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  PAGE_SIZE,
  API_URL,
  API_KEY,
} from "../config/config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  fetchRecipes: async (searchTerm, page, pageSize) => {
    const pageSizeUsed = pageSize || PAGE_SIZE;
    const offset = (page - 1) * pageSizeUsed;

    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&offset=${offset}&number=${pageSizeUsed}`
      : `${POPULAR_BASE_URL}&offset=${offset}&number=${pageSizeUsed}`;
    return await (await fetch(endpoint)).json();
  },
  fetchRecipe: async (recipeId) => {
    const endpoint = `${API_URL}recipes/${recipeId}/information?apiKey=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
