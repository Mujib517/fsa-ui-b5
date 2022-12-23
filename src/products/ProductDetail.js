import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';
import ShouldRender from '../common/ShouldRender';
import * as moment from 'moment';

const Reviews = ({ product }) => {
    const getUpdateDate = (review) => {
        // const dt = new Date(review.updatedDate).toLocaleDateString();
        // const time = new Date(review.updatedDate).toLocaleTimeString()
        // return dt + ' ' + time;
        return moment(review.updatedDate).fromNow();
    };

    return <div className="row">
        <h4>User Reviews</h4>
        <hr />
        <ShouldRender cond={product.reviews.length === 0}>
            <div>
                Be the first one to review
            </div>
            <button className="btn btn-sm btn-success">Add Review</button>
        </ShouldRender>
        {product.reviews.map((review, index) => <div key={index}>
            <h6>{review.subject} {review.rating}*</h6>
            <div>{review.message}</div>
            <div>{getUpdateDate(review)}</div>
            <hr />
        </div>)}
    </div>
};

// life cycle events
// Constructor
// ComponentDidMount
// ShouldComponentUpdate
// ComponentDidUpdate
// willComponentUnmount: clean up
// migration
// constructor
// componentDidMount
// componentDidUpdate
// shouldComponentUpdate
// componentWillUnmount
const ProductDetail = () => {
    const [product, setProduct] = useState({
        reviews: []
    });

    const params = useParams();

    useEffect(() => {
        // IIFE
        (async () => {
            const id = params.id;
            const res = await axios.get(`/api/products/${id}`);
            setProduct(res.data);
        })();
    }, []);

    const getDiscountedPrice = (product) => {
        const discountedAmount = product.price * (product.discount / 100);
        return product.price - discountedAmount;
    };

    return <div>
        <h1>{product.brand} {product.model}</h1>
        <div>Was: {product.price}</div>
        <div>Is: {getDiscountedPrice(product)}</div>
        <div>Rating: {product.avgRating && product.avgRating.toFixed(2)}</div>
        <div className="row">
            <div disabled={!product.inStock} className="col-2">
                <button className="btn btn-sm btn-danger">Add to cart</button>
            </div>
            <div disabled={!product.inStock} className="col-2">
                <button className="btn btn-sm btn-danger">Buy Now</button>
            </div>
        </div>
        <Reviews product={product} />
    </div>
}

export default ProductDetail;
