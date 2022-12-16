import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAllUsersThunk, deleteUserThunk } from "./users-thunk";
import { Link } from "react-router-dom";



const Users = () => {
    const { users, loading } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return (
        <>
            <h1>Number of users: {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                        <li key={user._id} className="list-group-item">
                            {user.username}
                            <i onClick={() => {
                                console.log("button pressed")
                                dispatch(deleteUserThunk(user._id))
                            }} className="bi bi-trash float-end"></i>

                            {/* <a className="btn btn-primary float-end" href={`http://localhost:3000/profile/${dog}`}"" role="button">View User's Profile</a> */}
                            <Link role="button" className="btn btn-primary float-end" to={`/profile/${user._id}`}>
                                View User's Profile
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users