import React from "react";
import PropTypes from "prop-types";
// Components
import Thumbnail from "../Thumbnail";

// Fallback Image
import NoImage from "../../images/no_image.jpg";

// Styles
import { Wrapper, Content, Text } from "./RecipeInfo.styles";

const RecipeInfo = ({ recipe }) => (
  <Wrapper backdrop={recipe.image}>
    <Content>
      <Thumbnail
        image={
          recipe.image
            ? recipe.image
            : NoImage
        }
        recipeHeight={true}
        clickable={false}
      />
      <Text>
        <h1>{recipe.title}</h1>
        <h3>Summary</h3>
        <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        <h3>Instructions</h3>
        <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </Text>
    </Content>
  </Wrapper>
)

RecipeInfo.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeInfo;
