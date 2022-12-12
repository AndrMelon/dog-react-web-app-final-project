import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate, useNavigate} from "react-router";

<script src="../../vendors/bootstrap/js/bootstrap.min.js"></script>

const Login = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
            // navigate('/profile')
        } catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h2>LOGIN</h2>
            <label> Username :</label> <br/>

            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>
            <label> Password :</label>  <br/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="password" type="password" value={password}/>

            <input type="checkbox" value="REMEMBER" id="chkbox-remember" />
            <label for="chkbox-remember"> Remember me?</label> <br/>

    <button
                className ="btn btn-primary w-100 "
                onClick={handleLoginBtn}>Login</button>

    <a> Need an account? </a><a href="/register">SIGN UP </a>
        </>

    )
}
export default Login