import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <>
            <h1>My Profile</h1>
            {
                currentUser &&
                <h2>Welcome back: {currentUser.username}</h2>
            }

            <h3>User's first name: {currentUser.firstName} </h3>
            <h3>User's last name: {currentUser.lastName} </h3>
            <h3>User's birthday: {currentUser.birthday} </h3>
            <h3>User's email: {currentUser.email} </h3>




            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}
export default Profile