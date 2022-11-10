import { useState } from "react";
import { useEffect } from "react";
import { getProductById } from "../api";
import { ReviewForm } from "./products/reviewForm";
import { ProductDetails } from "./products/productDetails";




export const Website = () => {
    const [ product, setProduct ] = useState(undefined);
    
    useEffect(() =>{
        getProductById(1)
        .then(x => setProduct(x));
    }, []);
    
    return <>
        <h1>AccountEditer</h1>

        <div>
            <label htmlFor="name"></label>
            <input type="text" className = "form-control"></input>
        </div>

        <ReviewForm/>

    </>;
};