import React from "react";

import Grid from "../Grid/index.jsx";
import Thumbnail from "../Thumbnail/index.jsx";
import { useSimilarRecipesFetch } from "../../hooks/useSimilarRecipesFetch.js";
import Spinner from "../Spinner/index.js";

import { Wrapper } from "./SimilarRecipes.styles";

const SimilarRecipes = ({recipe}) => {
  const {state, loading, error} = useSimilarRecipesFetch(recipe.recipeId);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <Wrapper>
      <Grid header={"Similar Recipes"} GridConfig={'300px'}>
        {state.results.map((recipe) => (
          <Thumbnail
            key={recipe.id}
            clickable
            image={
              recipe.image
                ? recipe.image
                : NoImage
            }
            text={recipe.title}
            recipeId={recipe.id}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default SimilarRecipes;
