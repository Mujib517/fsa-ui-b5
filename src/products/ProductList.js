import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './Product';
import Error from '../common/Error';
import ShouldRender from '../common/ShouldRender';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [response, setResponse] = useState({
        metadata: {},
        data: []
    });
    const [hasError, setError] = useState(false);

    useEffect(() => {
        axios.get('https://fsa-api-b4.onrender.com/api/products/page/1/limit/10')
            .then(res => {
                setError(false);
                setResponse(res.data);
            })
            .catch(err => setError(true));
    }, []);

    return <div className="container">
        <h4>Products</h4>
        <Link className="btn btn-danger btn-sm"
            to="/products/new">
            Add Product
        </Link>
        <ShouldRender cond={hasError}>
            <Error />
        </ShouldRender>
        {
            response.data.map(
                product => <ProductItem product={product} />
            )
        }
    </div>;
}

export default ProductList;


