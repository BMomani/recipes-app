import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content } from "./RecipeInfoBar.styles";

const RecipeInfoBar = ({ aggregateLikes, healthScore, readyInMinutes }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <div className="column">
            <p>LIKES: {aggregateLikes}</p>
          </div>
          <div className="column">
            <p>HEALTH SCORE: {healthScore}%</p>
          </div>
          <div className="column">
            <p>READY IN MINUTES: {readyInMinutes}</p>
          </div>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

RecipeInfoBar.propTypes = {
  aggregateLikes: PropTypes.number,
  healthScore: PropTypes.number,
  readyInMinutes: PropTypes.number,
};

export default RecipeInfoBar;
