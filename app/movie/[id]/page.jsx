import React from "react";
import MovieContainers from "../../../containers/movie";
import movies from "../../../mocks/movies.json";
import { notFound } from "next/navigation";

async function Delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Moviepage({ params, searchParams }) {
  await Delay(2000);
  const MovieDetails = movies.results.find((movie) => movie.id.toString() == params.id);
  console.log(searchParams.error);
  if (!MovieDetails) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error happened");
  }
  return <MovieContainers movie={MovieDetails} />;
}

export default Moviepage;
