import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findDogByIdThunk } from "../dogs/dogs-thunks";
import { createReviewThunk, findReviewsByDogThunk } from "../reviews/reviews-thunks";
import { Link } from "react-router-dom";

const DogCeoDetails = () => {
    const { did } = useParams()
    const [review, setReview] = useState('')
    const { reviews } = useSelector((state) => state.reviews)
    const { dogDetails } = useSelector((state) => state.dogs)
    const { currentUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(did)
        dispatch(findDogByIdThunk(did))
        dispatch(findReviewsByDogThunk(did))
    }, [])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            did
        }))
    }
    return (
        <>
            <h1>{dogDetails.breed}</h1>
            <div className="row">
                <div className="col">
                    <img src={dogDetails.url} className="img-fluid" height={200} width={300} />
                </div>
            </div>
            {
                currentUser &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            <ul className="list-group">
                {
                    reviews.map((review) =>
                        <li className="list-group-item" key={review._id}>
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">
                                {review.author.username}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default DogCeoDetails