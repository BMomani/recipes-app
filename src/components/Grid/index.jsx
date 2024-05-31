import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children, GridConfig}) => {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>{header}</h1>
        <Content GridConfig ={GridConfig} >{children}</Content>
      </Wrapper>
    </React.Fragment>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any,
  GridConfig: PropTypes.string,
};

export default Grid;
