import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name :'movies',
    initialState:{
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        upComingMovies:null,
        trailerVideos:null,
    },
    reducers:{
        addNowPlayingMovies:(state  , action )=>{
            state.nowPlayingMovies = action.payload
        },

        addPopularMovies:(state  , action )=>{
            state.popularMovies = action.payload
        },

        addTopRatedMovies:(state  , action )=>{
            state.topRatedMovies = action.payload
        },

        addUpcomingMovies:(state  , action )=>{
            state.upComingMovies = action.payload
        },
        
        addTrailerVideo:(state, action) =>{
            state.trailerVideos = action.payload
        }
    }
})

export const {addNowPlayingMovies , addPopularMovies , addTrailerVideo , addTopRatedMovies , addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;