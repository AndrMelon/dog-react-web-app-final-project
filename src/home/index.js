import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDogsThunk, deleteDogThunk } from "../dogs/dogs-thunks";
import { findAllDogsThunk } from "../dogs/dogs-thunks";
import { userLikesDogThunk } from "../likes/likes-thunks";
import { Link } from "react-router-dom";

const Home = () => {
    const { currentUser } = useSelector((state) => state.users)
    const { dogs } = useSelector((state) => state.dogs)
    // const [movie, setMovie] = useState({ title: 'New Movie' })
    const [dog, setDog] = useState({ title: 'Add Dog' })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllDogsThunk())
    }, [])
    return (
        <>
            <h1>Cute Dogs!</h1>
            {
                currentUser &&
                <h2>Welcome {currentUser.username} </h2>

            }
            <ul className="list-group">
                {/* <li className="list-group-item">
                    <button className="btn btn-success float-end" onClick={() => {
                        dispatch(createDogsThunk(
                            {
                                url: dogs
                            }
                        ))
                    }}>Create</button>
                    <input
                        className="form-control w-75"
                        onChange={(e) =>
                            setDog({ ...dog, title: e.target.value })}
                        value={dog.title} />
                </li> */}
                {
                    dogs.map((dog) =>
                        <li className="list-group-item"
                            key={dog._id}>

                            {currentUser &&
                                <div>
                                    {currentUser.role === 'ADMIN' && <i onClick={() => {
                                        dispatch(deleteDogThunk(dog._id))
                                    }}
                                        className="bi bi-trash float-end"></i>}
                                    <i onClick={() => {
                                        dispatch(userLikesDogThunk({
                                            uid: currentUser._id, did: dog._id
                                        }))
                                    }} className="float-end bi bi-hand-thumbs-up me-2"></i></div>
                            }


                            <Link to={`/details/${dog._id}`}>
                                <img className="img-fluid" src={dog.url} height={200} width={200} />
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Home;