import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/Constants'

const GptSearch = () => {
  return (
    <div>
      <div className='-z-10 fixed'>
        <img src = {BG_URL}  className='object-cover md:h-auto h-[1000px] '/>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
            
    </div>
  )
}

export default GptSearch