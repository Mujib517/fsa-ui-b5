import React from 'react';
import axios from 'axios';
import ShouldRender from '../common/ShouldRender';
import * as moment from 'moment';

const Reviews = ({ product }) => {
    const getUpdateDate = (review) => {
        // const dt = new Date(review.updatedDate).toLocaleDateString();
        // const time = new Date(review.updatedDate).toLocaleTimeString()
        // return dt + ' ' + time;
        return moment(review.updatedDate).fromNow();
    }

    return <div className="row">
        <h4>User Reviews</h4>
        <hr />
        <ShouldRender cond={product.reviews.length === 0}>
            <div>
                Be the first one to review
            </div>
            <button className="btn btn-sm btn-success">Add Review</button>
        </ShouldRender>
        {product.reviews.map(review => <div>
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
class ProductDetail extends React.Component {

    state = {
        product: {
            reviews: []
        }
    };

    async componentDidMount() {
        const res = await axios.get('https://fsa-api-b4.onrender.com/api/products/639be256f6cdd8e61b7ff1b0');
        console.log(res);
        this.setState({ product: res.data });
    }

    getDiscountedPrice = (product) => {
        const discountedAmount = product.price * (product.discount / 100);
        return product.price - discountedAmount;
    };

    render() {
        const { product } = this.state;

        return <div>
            <h1>{product.brand} {product.model}</h1>
            <div>Was: {product.price}</div>
            <div>Is: {this.getDiscountedPrice(product)}</div>
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
}

export default ProductDetail;
