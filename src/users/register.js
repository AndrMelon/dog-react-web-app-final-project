import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {current} from "@reduxjs/toolkit";
import {Navigate} from "react-router";

//MIRAR SCHEMA FOR CONST
const Register = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({username, password}))
    }

    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return(
        <>
            <h2>SIGN UP</h2>
            <label> User Name :</label>  <br/>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username}/>

            <label> Password :</label>  <br/>
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                type="password"
                value={password}/>
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Sign Up
            </button>

            {/*añadir una linea horizontal y espacio extra*/}

            <a> Already have an account? </a><a href="/login"> LOG IN </a>





            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
        </>
    )
}
export default Register