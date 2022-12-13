import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk,deleteUserThunk} from "./users-thunk";


const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Number of users: {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li key={user._id} className="list-group-item">
                        {user.username}
                        { user &&
                            <i onClick={() => {
                                dispatch(deleteUserThunk(user._id))
                            }}
                               className="bi bi-trash float-end"></i> }

                        <a className="btn btn-primary float-end" href="http://localhost:3000/profile/:uid" role="button">View User's Profile</a>

                    </li>
                    )
                }
            </ul>
        </>
    )
}

export default Users