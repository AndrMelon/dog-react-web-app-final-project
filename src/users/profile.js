import {useDispatch, useSelector} from "react-redux";
import {deleteUserThunk, logoutThunk, profileThunk} from "./users-thunk";
import {useNavigate} from "react-router";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    //have to edit this!!!
    const handleEditProfile = () => {
        dispatch(profileThunk())
    }

    return(
        <>
            <h1>My Profile</h1>
            {
                currentUser &&
                <h2>Welcome back: {currentUser.username}</h2>
            }


            <ul className="list-group">
                <li className="list-group-item"><h4>User's first name: {currentUser.firstName}</h4></li>
                <li className="list-group-item"><h4>User's last name: {currentUser.lastName}</h4></li>
                <li className="list-group-item"><h4>User's birthday: {currentUser.birthday}</h4></li>
                <li className="list-group-item"><h4>User's email: {currentUser.email}</h4></li>



            </ul>


            <br/><br/><br/>
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>


            <button
                className="btn btn-primary float-end"
                onClick={handleEditProfile}>
                Edit Profile
            </button>
        </>
    )
}
export default Profile