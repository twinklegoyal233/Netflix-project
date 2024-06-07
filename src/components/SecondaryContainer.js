import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from "./MovieList"

export const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black -mt-72' >
       <MovieList title = {"Now playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
      <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
    </div>
  )
}
