import React from 'react'
import { MOVIE_CDN_LINK } from '../utils/constant'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-24 xl:w-40 2xl:w-44 pr-4' >
    <img alt='Movie card' src={MOVIE_CDN_LINK + posterPath}  />
      </div>
  )
}

export default MovieCard
