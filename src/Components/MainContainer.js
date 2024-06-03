import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    
    // the below if statement is written so that reading value 0 does not occurs
    if(!movies || movies.length === 0) return <div>Loading</div>
    const mainMovie = movies[0]
    const {title , overview , id} = mainMovie
    
    return (
      <div>
          <VideoTitle title={title} overview={overview} />
          <VideoBackground id ={id} />
      </div>
    )
}

export default MainContainer