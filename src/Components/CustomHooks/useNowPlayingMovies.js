import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options} from '../../utils/Constants';
import { addNowPlayingMovies } from '../../utils/movieSlice';


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

    const nowPlayingMovies=useSelector(store => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async() =>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
    const json= await data.json();
    dispatch(addNowPlayingMovies(json.results))
    } 

    useEffect(() =>{ 

    !nowPlayingMovies && getNowPlayingMovies()

    // we will not fetch data when nowPlayingMovies already has movies in the store 
    // this is becuase if we reload page then store also reloads the states by making api calls
    // so we do not want to make unnecessary api calls
    // this is called memoization
    } , [])

}

export default useNowPlayingMovies;
