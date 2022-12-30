import React from 'react'
import { FeaturedMovie } from '../../components/featured-movie'

const MovieContainers = ({movie}) => {
console.log(movie)
  return (
    <div>
       <FeaturedMovie movie={movie} isCompact={false}/>
    </div>
  )
}

export default MovieContainers
