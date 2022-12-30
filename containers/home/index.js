import React from 'react'
import { FeaturedMovie } from '../../components/featured-movie'
import Movies from "../../mocks/movies.json"

const index = () => {
  return (
    <div><FeaturedMovie movie={Movies}/></div>
  )
}

export default index