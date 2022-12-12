import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";

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


                        <li
                            key={user._id} className="list-group-item">
                                {user.username}
                            <a href="http://localhost:3000/profile/:uid"><button className= "btn btn-success float-end"> View User's Profile</button></a>

                        </li>

                    )
                }
            </ul>
        </>
    )
}

export default Users