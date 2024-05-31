import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image, Text } from "./Thumbnail.styles";

const Thumbnail = ({ image, recipeId, clickable, recipeHeight, text }) => {
  return (
    <Wrapper>
      {clickable ? (
        <Link to={`/${recipeId}`}>
          <Image src={image} alt="recipe-thumb" recipeHeight={recipeHeight}/>
          <Text>{text}</Text>
        </Link>
      ) : (
        <Image src={image} alt="recipe-thumb" recipeHeight={recipeHeight} />
      )}

    </Wrapper>
  );
};

Thumbnail.prototype = {
  image: PropTypes.string,
  text: PropTypes.string,
  recipeId: PropTypes.number,
  clickable: PropTypes.bool,
  recipeHeight: PropTypes.bool,
};

export default Thumbnail;
