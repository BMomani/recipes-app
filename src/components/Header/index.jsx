import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg } from "./Header.styles";
import RecipeLogo from "../../images/recipe-image.png";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RecipeLogo} alt="recipe-logo" />
        </Link>
        <h1>let's try Recipes</h1>
      </Content>
    </Wrapper>
  );
};

export default Header;
