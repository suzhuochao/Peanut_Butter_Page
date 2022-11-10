import { useState } from "react";
import { useEffect } from "react";

import { getProductById } from "../../api";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";


export const ProductDetails = () => {
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        getProductById(1)
            .then(x => setProduct(x));
    }, []);

    if (!product) {
        return <>Loading...</>;
    }

    return <>
        <div className="container" >
            <div className="bg-success bg-opacity-10 mt-2 p-2 d-flex flex-row">
                <a href="#">Tasty snacks </a>
                <div> /  {product.name}</div>
            </div>
            <div className="bg-secondary bg-opacity-10 mt-2 g-3 border p-2">
                <img src={product.imageUrl} className="float-start" alt="#" />

                <div className="fs-1" >
                    {product.name}
                </div>
                <div className="fs-5 text-secondary">
                    {product.description}
                </div>
                <div>
                    <div>
                        <span className="float-start badge bg-primary fs-5 mt-3">
                            ${product.price}
                        </span>
                    </div>
                    <span className="clearfix"></span>
                </div>
            </div>
                
            <div>
                <ReviewList reviews={product.reviews}/>
            </div>

            <div className="">
                <ReviewForm onReviewAdded={review => {
                    let _product = {...product};
                    _product.reviews.push(review);
                    setProduct(_product);
                }}/>
            </div>
        </div>

    </>;
};