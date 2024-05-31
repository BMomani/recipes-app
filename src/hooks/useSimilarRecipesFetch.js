import { useState, useEffect } from "react";
import API from "../API/API";

// Helpers
import { isPersistedState } from "../helpers/helpers";

export const useSimilarRecipesFetch = (recipeId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(false);

        const recipe = await API.fetchRecipes('', 1, 3);

        setState({
          ...recipe,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchRecipes();
  }, [recipeId]);

  return { state, loading, error };
};
