import { Rating } from "../common/rating"

export const ReviewList = ({ reviews }) => {

    return <>


        <ul className="list-group mt-3 mb-3">
            <div className="d-flex flex-row mt-2">
                <header className="fs-5 p-2">Product Reviews </header>
                <div className="p-2 fs-5 text-secondary">({reviews.length})</div>
            </div>
            <div>
                {reviews.length === 0 && <p className="row border p-2 mt-0">Be the first add review!</p>}
                {
                    reviews.map((review, index) =>

                        <li key={index} className="list-group-item mt-3 p-2">
                            <div className="mt-2 ">
                                <div className="row  g-3 p-2 mt-2 bg-secondary bg-opacity-20">
                                    <Rating value={review.rating} />
                                </div>

                                <div className=" bg-secondary bg-opacity-10 p-2 ">
                                    <div className="d-flex flex-row p-3 mb-2">
                                        <div className="text-secondary ms-2">
                                            {review.userName}
                                        </div>
                                        <div className="text-secondary text-opacity-10 position-absolute top-50 end-0 me-3">
                                            {review.date}
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-3 ms-3">
                                            "{review.comment}"
                                        </div>
                                </div>
                            </div>
                        </li>)
                }
            </div>
        </ul>
    </>
}