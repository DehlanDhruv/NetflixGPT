import React , {useRef} from "react";
import openai from '../utils/openai';
import { API_Options } from "../utils/Constants";
import { addGptMovieResult } from "../utils/gptSlice";
import {useDispatch} from 'react-redux';

const GptSearchBar = () => {

  const searchText = useRef(null);
  const dispatch = useDispatch();
  // search movie in tmdb function
  const searchMovieTMBD = async (movie) =>{
    const data = await fetch (`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}`, API_Options)    
    const json = await data.json()
    return json.results
  }

  const handleGptSearchClick = async() => {
    const gptQuery = 'Act as a movie recommendation system and suggest some movies based on the query' + searchText.current.value + '.only  give names of 5 movies like the example ahead . Example: Harry Potter , Batman , Spiderman , James Bong '
    const genre = searchText.current.value
    console.log(genre)
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery  }],
        model: 'gpt-3.5-turbo',
      });

      //  const gptMovies= gptResults.choices?.[0]?.message?.content.split(',')   
      //  const gptMovies = gptResults.choices?.[0]?.message?.content.split('\n').map(movie => movie.trim());

       const gptMovies = gptResults.choices?.[0]?.message?.content.split('\n').map(movie => movie.replace(/^\d+\.\s*/, '').trim());

      // for each movie we will search in tmdb api
      const promiseArray = gptMovies.map(  (movie) => {return ( searchMovieTMBD(movie))})
      // data will have array of [] promises as searchMovieTMDB is async

      // we will use Promise.all() which takes promise array  and prog will wait for Promise.all to finish
      const tmdbResults = await Promise.all(promiseArray)
      //pushing these movies in the redux store
      dispatch(addGptMovieResult({movieNames:gptMovies , movieResults: tmdbResults , query:genre}))

  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12 md:w-1/2 w-[98%] mt-[30%] md:mt-[4%] rounded-lg" onSubmit={(e)=>(e.preventDefault())}>
        <input
          ref={searchText}
          className="md:p-4 p-1 md:m-4 my-3 mx-0.5 col-span-9 rounded-lg text-md md:text-xl"
          type="text"
          name="search"
          placeholder="What would you like to watch"
        />
        <button onClick ={handleGptSearchClick} className=" col-span-3 md:m-4 py-2 md:px-4 my-3 mx-1 bg-red-700 text-white rounded-lg text-md md:text-xl">
          Search 
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
