import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import Slider from "react-slick";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames , query } = gpt

  if (!movieNames) return <h1> </h1>;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90 w-[97%]">
      <h3 className=" text-xl md:text-3xl ml-[4%] md:ml-[25%]">Showing results for : {query && query.substring(0, 10)}</h3>
        {movieNames.map((movieName ,index) => (
          <MovieList 
            key={movieName} 
            title={movieName} 
            movies={movieResults[index]} />
        ))}
    </div>
  );
};

export default GptMovieSuggestions;
