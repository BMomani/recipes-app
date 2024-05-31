import React from "react";

// Components
import HeroImage from "../components/HeroImage/index.jsx";
import Grid from "../components/Grid/index.jsx";
import Thumbnail from "../components/Thumbnail/index.jsx";
import Spinner from "../components/Spinner/index.js";
import SearchBar from "../components/SearchBar/index.jsx";
import Button from "../components/Button/index.jsx";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch.js";

// Image: if API fails to render image then the fallback image used this one
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }
  return (
    <React.Fragment>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={state.results[0].image}
          title={state.results[0].title}
          text={undefined}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <Grid header={searchTerm ? "Search Result" : "Popular Recipes"}>
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

      {loading && <Spinner />}

      {(state.number * state.offset + 1) < state.totalResults && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </React.Fragment>
  );
};
export default Home;
