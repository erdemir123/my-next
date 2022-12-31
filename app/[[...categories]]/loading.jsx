import React from 'react'
import { CategoriesLoading } from '../../components/categories/loading'
import { FeatureMovieLoading } from '../../components/featured-movie/loading'
import { MoviesLoading } from '../../components/movies-sections/loading'

const loading = () => {
  return (
    <div>
       
       <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesLoading />
      <MoviesLoading />
      <MoviesLoading />
    </div>
  )
}

export default loading
