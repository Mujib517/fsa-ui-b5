import React from 'react';
import axios from 'axios';

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
            <div className="row">
                <h4>User Reviews</h4>
                <hr />
                {product.reviews.map(review => <div>
                    <h6>{review.subject} {review.rating}*</h6>
                    <div>{review.message}</div>
                    <div>{review.updatedDate}</div>
                    <hr />
                </div>)}
            </div>
        </div>
    }
}

export default ProductDetail;
