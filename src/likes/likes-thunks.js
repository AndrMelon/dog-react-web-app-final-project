import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLikesDog } from "./likes-service";


export const userLikesDogThunk = createAsyncThunk(
    'userLikesDog',
    async (like) => {
        return await userLikesDog(like.uid, like.did)
    }
)