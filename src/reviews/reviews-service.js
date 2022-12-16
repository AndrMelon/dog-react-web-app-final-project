import axios from "axios";

const REVIEW_API = 'http://localhost:4000/api/reviews'
const DOGS_REVIEWS_API = 'http://localhost:4000/api/dogs'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create({ withCredentials: true });

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByDog = async (did) => {
    const response = await api.get(`${DOGS_REVIEWS_API}/${did}/reviews`)
    console.log(response.data)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}
