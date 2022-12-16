import { createSlice } from "@reduxjs/toolkit";
import { findMovieByImdbIdThunk, findDogBySearchTermThunk, getRandomDogsThunk } from "./dogceo-thunks";

const initialState = {
    dogs: [],
    loading: false,
    details: {}
}

const dogCeoReducer = createSlice({
    name: 'dogCeo',
    initialState,
    extraReducers: {
        [getRandomDogsThunk.fulfilled]: (state, action) => {
            console.log("dogCeo:")
            // console.log(state.dogCeo)
            console.log("dogCeoPost:")

            state.dogs = action.payload
        },
        [findDogBySearchTermThunk.fulfilled]: (state, action) => {
            state.dogs = action.payload
            console.log("dogCeo:")
            console.log(action.payload)
            console.log("dogPost:")

            state.dogs = action.payload

        },
        [findMovieByImdbIdThunk.fulfilled]: (state, action) => {
            state.details = action.payload
        }
    }
})

export default dogCeoReducer.reducer