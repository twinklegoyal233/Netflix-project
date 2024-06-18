import React from 'react'

import { useSelector } from 'react-redux';
import MovieList from "./MovieList"

export const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black relative top-[- 1rem] md:top-[0] ' >
       <MovieList title = {"Now playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
    </div>
  )
}
