import { createAsyncThunk } from "@reduxjs/toolkit";
import { findDogBySearchTerm, getRandomDogs } from "./dogceo-service";

export const findDogBySearchTermThunk = createAsyncThunk(
    'findDogBySearchTerm',
    (term) => findDogBySearchTerm(term)
)

export const getRandomDogsThunk = createAsyncThunk(
    'getRandomDogsThunk',
    (numDogs) => getRandomDogs(numDogs)
)
