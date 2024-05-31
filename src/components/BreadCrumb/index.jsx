import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from "./BreadCrump.styles";

const BreadCrumb = ({ recipeTitle }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>|</span>
          <span>{recipeTitle}</span>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

BreadCrumb.propTypes = {
  recipeTitle: PropTypes.string,
};

export default BreadCrumb;
