import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 xl:px-8 2xl:px-8" >
        <h1 className="text-xl md:text-2xl  py-4 text-white" >{title}</h1>
      <div className="flex overflow-x-scroll" >
        <div className="flex "  >
      
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
