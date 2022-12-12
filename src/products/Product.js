import React from 'react';
import './Product.css';

// dumb 
// presentation
// shift + F6
// bootstrap
const Product = ({ product }) => {

    const getDiscountedPrice = () => {
        const discountedAmount = product.price * (product.discount / 100);
        return product.price - discountedAmount;
    };

    return <div>
        <h4>{product.brand} {product.model}</h4>
        <div style={{ textDecoration: product.discount > 0 ? 'line-through' : '' }}>Was: ${product.price}</div>
        <div>Is: ${getDiscountedPrice()}</div>
        <img alt="product" src={product.image} width="100" height="100" />
        <button className="button" disabled={product.inStock}>Buy Now</button>
        <hr />
    </div>
};

export default Product;
