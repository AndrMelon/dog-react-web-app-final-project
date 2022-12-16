import { createSlice } from "@reduxjs/toolkit";
import { findDogById } from "./dogs-service";
import { createDogsThunk, deleteDogThunk, findAllDogsThunk, findDogByIdThunk } from "./dogs-thunks";

const initialState = {
    dogs: [],
    dogDetails: {},
    loading: true
}

const dogsReducer = createSlice({
    name: 'dogs',
    initialState: initialState,
    extraReducers: {
        [findAllDogsThunk.fulfilled]: (state, action) => {
            state.dogs = action.payload
        },
        [findDogByIdThunk.fulfilled]: (state, action) => {
            state.dogDetails = action.payload
        },
        [createDogsThunk.fulfilled]: (state, action) => {
            state.dogs.push(action.payload)
        },
        [deleteDogThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.dogs = state.dogs.filter(d => {
                return d._id !== action.payload
            })
        }
    }
})

export default dogsReducer.reducer;