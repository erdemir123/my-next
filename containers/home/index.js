import React from "react";
import { FeaturedMovie } from "../../components/featured-movie";
import Movies from "../../mocks/movies.json";
import categories from "../../mocks/genres.json";
import { Categories } from "../../components/categories";
import { MoviesSection } from "../../components/movies-sections";

const index = () => {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={categories.genres.slice(0,8)} />
      <MoviesSection title="Populer Films" movies={Movies.results.slice(0,7)} />
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,13)} />
    </div>
  );
};

export default index;
