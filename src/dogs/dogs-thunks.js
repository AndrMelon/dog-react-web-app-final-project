import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllDogs, createDog, deleteDog, findDogById } from "./dogs-service";

export const createDogsThunk = createAsyncThunk(
    'createDog',
    (newDog) => createDog(newDog)
)

export const findAllDogsThunk = createAsyncThunk(
    'findAllDogs',
    () => findAllDogs()
)

export const findDogByIdThunk = createAsyncThunk(
    'findDogById',
    (did) => findDogById(did)
)

export const updateDogThunk = {}
export const deleteDogThunk = createAsyncThunk(
    'deleteDog',
    (did) => deleteDog(did)
)