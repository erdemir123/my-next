
import React from "react";
import { Categories } from "../../components/categories";
import { FeaturedMovie } from "../../components/featured-movie";
import { MoviesSection } from  "../../components/movies-sections";
import Genres from "../../mocks/genres.json"
import Movies from "../../mocks/movies.json"

function HomeContainer({selectedCategori}) 

{console.log(selectedCategori.id[0])
    console.log(Genres.genres.find((item)=>`${item.id}` === selectedCategori.id[0])?.name);
  return (
    <div>
      <FeaturedMovie
        movie={Movies.results[0]}
      />
      <Categories categories={Genres.genres.slice(0,5)} />
      {selectedCategori.movies?.length > 0 && (
        <MoviesSection
          title={Genres.genres.find((genre)=>`${genre.id }`=== selectedCategori.id[0]).name}
          movies={selectedCategori.movies}
        />
      )}
       <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={Movies.results.slice(1, 7)}
      />
    </div>
  );
}

export default HomeContainer ;