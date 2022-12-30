import React from 'react'
import MovieContainers from '../../../containers/movie'
import movies from "../../../mocks/movies.json"
import {notFound} from "next/navigation"

const Moviepage = ({params}) => {
    console.log(params)
const MovieDetails = movies.results.find((movie)=>movie.id==params.id)
console.log(MovieDetails);
if(!MovieDetails){
    notFound()
}
  return (
    <MovieContainers movie={MovieDetails}/>
  )
}

export default Moviepage
