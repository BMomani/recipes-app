import { useState, useEffect } from "react";
// API
import API from "../API/API";

const intialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [error, setEror] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchRecipes = async (page, searchTerm = "") => {
    try {
      setEror(false);
      setLoading(true);
      const recipes = await API.fetchRecipes(searchTerm, page);
      //   console.log(recipes);
      setState((prev) => ({
        ...recipes,
        page: page,
        results:
          page > 1 ? [...prev.results, ...recipes.results] : [...recipes.results],
      }));
    } catch (error) {
      setEror(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchRecipes(1);
  }, []);

  // Search
  useEffect(() => {
    setState(intialState);
    fetchRecipes(1, searchTerm);
  }, [searchTerm]);

  // Load More Button
  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    fetchRecipes(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
