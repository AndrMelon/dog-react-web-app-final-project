import Home from "./home";
import dogCeoReducer from "./dogceo/dogceo-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import DogCeoSearch from "./dogceo/dogceo-search";
import { likesReducer } from "./likes/likes-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import Users from "./users";
import usersReducer from "./users/users-reducer";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import Profile from "./users/profile";
import ProtectedRoute from "./users/protected-route";
import DogCeoDetails from "./dogceo/dogceo-details";
import reviewsReducer from "./reviews/reviews-reducer";
import PublicProfile from "./users/public-profile";
import followsReducer from "./follows/follows-reducer";
import dogsReducer from "./dogs/dogs-reducer";

const store = configureStore({
    reducer: {
        dogs: dogsReducer,
        dogCeo: dogCeoReducer,
        likes: likesReducer,
        users: usersReducer,
        reviews: reviewsReducer,
        follows: followsReducer
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <BrowserRouter>
                    <CurrentUser>
                        <Navigation />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/search" element={<DogCeoSearch />} />
                            <Route path="/users" element={
                                <ProtectedRoute>
                                    <Users />
                                </ProtectedRoute>
                            } />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            } />
                            <Route path="/details/:did" element={<DogCeoDetails />} />
                            <Route path="/profile/:uid" element={<PublicProfile />} />
                        </Routes>
                    </CurrentUser>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
