import { createAsyncThunk } from "@reduxjs/toolkit";
import { findMovieByImdbId, findMovieBySearchTerm, getRandomDogs } from "./omdb-service";

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    (term) => findMovieBySearchTerm(term)
)

export const getRandomDogsThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    (numDogs) => getRandomDogs(numDogs)
)

export const findMovieByImdbIdThunk = createAsyncThunk(
    'findMovieByImdbId',
    (imdbID) => findMovieByImdbId(imdbID)
)