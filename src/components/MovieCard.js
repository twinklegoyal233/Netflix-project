import React from 'react'
import { MOVIE_CDN_LINK } from '../utils/constant'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4' >
    <img alt='Movie card' src={MOVIE_CDN_LINK + posterPath}  />
      </div>
  )
}

export default MovieCard
