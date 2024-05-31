import { useState, useEffect } from "react";
import API from "../API/API";

// Helpers
import { isPersistedState } from "../helpers/helpers";

export const useRecipeFetch = (recipeId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError(false);

        const recipe = await API.fetchRecipe(recipeId);

        setState({
          ...recipe,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(recipeId);

    if (sessionState) {
      console.log("Grabbing recipeId from sessionStorage");
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchRecipe();
  }, [recipeId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(recipeId, JSON.stringify(state));
  }, [recipeId, state]);

  return { state, loading, error };
};
