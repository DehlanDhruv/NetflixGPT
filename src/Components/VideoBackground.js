import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "./CustomHooks/useMovieTrailer";

const VideoBackground = ({ id }) => {

  useMovieTrailer(id);
  const trailer = useSelector(store => store.movies?.trailerVideos)

  return (
    <div>
      <iframe
        className="w-full aspect-video h-[500px] md:h-auto"
        src={"https://www.youtube.com/embed/" + trailer?.key +'?autoplay=1&mute=1'} // this trailer cant be accessed directly hence we can create a state or trailer in redux and get it from there
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
