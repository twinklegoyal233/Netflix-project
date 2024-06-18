import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
export const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if (!movies) return;
  const mainMovie = movies[0];

  const  {original_title, overview, id } = mainMovie;
  return (
    <div className="xl:pt-0 pt-[12%] bg-black lg:bg-transparent md:bg-transparent lg:relative lg:pt-0 xl:relative md:mt-[-7rem] ">
      <VideoTitle title = {original_title} overview = {overview}  />
      <VideoBackground movieId={id} />

    </div>
  );
};
