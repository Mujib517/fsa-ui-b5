import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import NoImage from '../assets/img/no-img.jpeg';
import axios from '../utils/axios';

const Product = ({ product, onNotify }) => {

    const getDiscountedPrice = () => {
        const discountedAmount = product.price * (product.discount / 100);
        return product.price - discountedAmount;
    };

    const remove = async () => {
        const result = window.confirm('Are you sure you want to delete?');
        if (result) {
            await axios.delete(`https://fsa-api-b4.onrender.com/api/products/${product._id}`);
            onNotify();
        }
    };

    return <div className="col-md-4 offset-md-1">
        <div className="card">
            <Link to={`/products/detail/${product._id}`}>
                <img alt="product" src={product.image || NoImage} className="card-img-top" width="100" he
                    height="200" />
                <div className="card-body">
                    <div className="card-title">
                        <b>{product.brand} {product.model}</b>
                        <div style={{ textDecoration: product.discount > 0 ? 'line-through' : '' }}>Was: ${product.price}</div>
                        <div>Is: ${getDiscountedPrice()}</div>
                    </div>
                </div>
            </Link>
            <div className="card-footer">
                <button className="custom-btn btn btn-danger btn-sm" disabled={!product.inStock}>
                    Add to cart
                    <i className="fa-sharp fa-solid fa-cart-plus"></i>
                </button>
                <button onClick={remove} className="btn btn-danger btn-sm m-1">
                    Delete
                    <i className="fa-sharp fa-solid fa-close m-1"></i>
                </button>
            </div>
        </div>
        <hr />
    </div >
};

export default Product;
