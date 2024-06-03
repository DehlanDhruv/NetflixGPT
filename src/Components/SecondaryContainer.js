import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
   
  return (
    <div className='bg-black'>
        <div className='md:-mt-[190px] relative z-20 -mt-35 md:pt-10 '>
            <MovieList title ={'Now Playing'} movies = {movies.nowPlayingMovies}/>            
            <MovieList title = {'Top Rated Movies '} movies={movies.topRatedMovies} />
            <MovieList title ={'Popular Movies'} movies={movies.popularMovies} />
            <MovieList title={'Upcoming Movies'} movies={movies.upComingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer