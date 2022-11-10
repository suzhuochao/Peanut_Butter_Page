import { useState } from "react";
import { TextField } from "../common/textField";
import { SelectField } from "../common/selectField";
import { TextAreaField } from "../common/textAreaField";
import { Rating } from "../common/rating";
import { ProductReviews } from "../../models/productReview";


export const ReviewForm = ({ onReviewAdded }) => {

    const [userName, setUserName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const ratingOption = [
        { value: 1, label: '1 stars' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' }
    ]

    return <>
        <form className="row g-3 border p-2 mt-2">
            <header className="bg-secondary bg-opacity-20 p-2 text-light">Add Review</header>
            <div className="form-group mb-4">
                <div className=" d-flex flex-row">
                    <div className="col-md-7 p-2 text-secondary text-opacity-10">
                        <TextField label="Your Name"
                            value={userName}
                            setValue={setUserName}
                            className="form-control" />
                    </div>
                    <div className="col-md-2 p-2 text-secondary text-opacity-10">
                        <SelectField label="Rating"
                            value={rating}
                            setValue={setRating}
                            option={ratingOption}
                            optionValueKey="value"
                            optionLabelKey="label" />
                    </div>
                    <div className="p-2 position-relative top-100 end-0 mt-4">
                        <Rating value={rating} />
                    </div>
                </div>
                <div className="col-sm text-secondary text-opacity-10">
                    <TextAreaField label="Comment"
                        value={comment}
                        setValue={setComment} />
                </div>
                <div className="row">
                    <div className="mb-1">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            onReviewAdded(new ProductReviews(userName, rating, comment, new Date().toDateString()));
                            setUserName('');
                            setRating('');
                            setComment('');
                        }}>
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </form>
    </>
}