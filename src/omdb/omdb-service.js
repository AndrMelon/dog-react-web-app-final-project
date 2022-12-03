import axios from "axios";

const SEARCH_URL = 'https://dog.ceo/api/breed/'
const DETAILS_URL = 'https://omdbapi.com/?apikey=852159f0&i='

export const findMovieBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}/images/random/3`)
    return response.data.message
}

export const findMovieByImdbId = async (imdbID) => {
    const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    return response.data
}