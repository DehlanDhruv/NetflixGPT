import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import Slider from "react-slick";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames , query } = gpt;
  

  console.log( 'movieNames' , movieNames)

  if (!movieNames) return <h1> Loading </h1>;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90 w-[97%]">
      <h3 className="text-3xl ml-[25%]">Showing results for : {query && query.substring(0, 14)}</h3>
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
