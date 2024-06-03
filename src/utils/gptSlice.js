import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    query: null
  };

const gptSlice = createSlice({
    name :'gpt' ,
    initialState, 
    reducers: {
        toggleGptSearchView:(state) =>{
            state.showGptSearch = !state.showGptSearch
        },

        addGptMovieResult:(state , action) =>{
            const {movieNames , movieResults , query} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
            state.query = query
        },

        resetGptState: (state) => {
            return initialState;
          }
        
    }
})

export default gptSlice.reducer

export const {toggleGptSearchView , addGptMovieResult , resetGptState} = gptSlice.actions