import React, { useEffect } from "react";
import { API_Options } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";

export const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()
    const getMoviesVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
        API_Options
      );
      const json = await data.json();
      const filteredTrailer = json.results.filter((i) => i.type === "Trailer");
      const trailer = filteredTrailer.length
        ? filteredTrailer[0]
        : json.results[0]; // if trailer does not exists then take first video from videos array
  
        dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
      getMoviesVideos();
    }, []);
}


