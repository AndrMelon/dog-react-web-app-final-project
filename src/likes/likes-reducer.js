import { createSlice } from "@reduxjs/toolkit";
import { userLikesDogThunk } from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesDogThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        },
    }
})