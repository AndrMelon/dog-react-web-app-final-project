import { createAsyncThunk } from "@reduxjs/toolkit";
import { createReview, findReviewsByAuthor, findReviewsByDog } from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const findReviewsByDogThunk = createAsyncThunk(
    'findReviewsByMovieThunk',
    async (did) => findReviewsByDog(did)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)