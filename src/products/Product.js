import React from 'react';
import './Product.css';

const Product = ({ product }) => {

    const getDiscountedPrice = () => {
        const discountedAmount = product.price * (product.discount / 100);
        return product.price - discountedAmount;
    };

    return <div className="col-md-3 offset-md-1">
        <div className="card">
            <img alt="product" src={product.image} className="card-img-top" width="100" he
                height="200" />
            <div className="card-body">
                <div className="card-title">
                    <b>{product.brand} {product.model}</b>
                    <div style={{ textDecoration: product.discount > 0 ? 'line-through' : '' }}>Was: ${product.price}</div>
                    <div>Is: ${getDiscountedPrice()}</div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-success btn-lg" disabled={product.inStock}>Add to cart</button>
            </div>
        </div>


        <hr />
    </div>
};

export default Product;
