import axios from "axios";

const SEARCH_URL = 'https://dog.ceo/api/breed/'
const RANDOM_URL = 'https://dog.ceo/api/breeds/image/random/'
const DETAILS_URL = 'https://omdbapi.com/?apikey=852159f0&i='

export const findDogBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}/images/random/3`)
    // console.log(response.data.message);
    console.log("axios call");
    return response.data.message
}


export const getRandomDogs = async (numDogs) => {
    const response = await axios.get(`${RANDOM_URL}${numDogs}`)
    console.log(response.data.message)
    return response.data.message
}

export const findMovieByImdbId = async (imdbID) => {
    const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    return response.data.message
}