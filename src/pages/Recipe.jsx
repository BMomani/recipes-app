import React from "react";
import { useParams } from "react-router-dom";

// Components
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import BreadCrumb from "../components/BreadCrumb";
import RecipeInfo from "../components/RecipeInfo/index.jsx";
import RecipeInfoBar from "../components/RecipeInfoBar/index.jsx";

// Hooks
import { useRecipeFetch } from "../hooks/useRecipeFetch";


import SimilarRecipes from "../components/SimilarRecipes/index.jsx";

const Recipe = () => {
  const { recipeId } = useParams();
  const { state: recipe, loading, error } = useRecipeFetch(recipeId);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      <BreadCrumb recipeTitle={recipe.title} />
      <RecipeInfo recipe={recipe} />
      <RecipeInfoBar
        aggregateLikes={recipe.aggregateLikes}
        healthScore={recipe.healthScore}
        readyInMinutes={recipe.readyInMinutes}
      />
      <SimilarRecipes recipe={recipe} />
    </React.Fragment>
  );
};

export default Recipe;
