import React from "react";
import HomeContainer from "../../containers/home";
import Movies from "../../mocks/movies.json";
async function Delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Home({ params }) {
 
 await Delay (500)
  let selectedCategory;
  if (params.categories?.length > 0) {
    selectedCategory = true;
    
  }
  return (
    <HomeContainer
      selectedCategori={{
        id: params.categories ?? "" ,
        movies: selectedCategory ? Movies.results.slice(0, 5) : [],
      }}
    />
  );
}
export default Home;
