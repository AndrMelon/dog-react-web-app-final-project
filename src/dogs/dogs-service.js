import axios from "axios";
const DOG_API_URL = 'http://localhost:4000/dogs'

export const createDog = async (newDog) => {
    const response = await axios.post(DOG_API_URL, newDog)
    const actualDog = response.data
    return actualDog
}
export const findAllDogs = async () => {
    const response = await axios.get(DOG_API_URL)
    const dogs = response.data
    return dogs
}

export const findDogById = async (did) => {
    const response = await axios.get(`${DOG_API_URL}/${did}`)
    const dogs = response.data
    return dogs
}
export const updateDog = async () => { }
export const deleteDog = async (did) => {
    const response = await axios.delete(`${DOG_API_URL}/${did}`)
    const status = response.data
    console.log(status);
    return did;
}