import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'


const MovieCard = ({posterPath}) => {
  
  // if no poster then don't show the movie
  if(!posterPath) return null 

  return (
    <div className=' w-28 md:w-48 h-fit pr-0 hover:scale-110 transition-transform duration-500 ease-in-out'>
        <img  className ='rounded-sm' alt ='movie_logo' src={IMG_CDN_URL + posterPath } />
    </div>
  )
}

export default MovieCard