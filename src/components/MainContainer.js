import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
export const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if (!movies) return;
  const mainMovie = movies[0];

  const  {original_title, overview, id } = mainMovie;
  return (
    <div className="">
      <VideoTitle title = {original_title} overview = {overview}  />
      <VideoBackground movieId={id} />

    </div>
  );
};
