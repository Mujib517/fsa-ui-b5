import React, { useEffect, useState } from 'react';
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
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://fsa-api-b4.onrender.com/api/products/page/${page}/limit/10`)
            .then(res => {
                setError(false);
                setResponse(res.data);
            })
            .catch(err => setError(true));
    }, [page]);

    const onPrev = () => {
        if (page > 1)
            setPage(page - 1);
    }
    const onNext = () => {
        if (page < response.metadata.pages)
            setPage(page + 1);
    };

    return <div className="container">
        <h4>Products</h4>
        <ShouldRender cond={hasError}>
            <Error />
        </ShouldRender>
        <div className="row m-2">
            <div className="col-1">
                <button disabled={page === 1} onClick={onPrev} className="btn btn-sm btn-outline-secondary">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            </div>

            <div className="col-4">
                <span>Page {page} of {response.metadata.pages} (total {response.metadata.count} records )</span>
            </div>
            <div className="col-1">
                <button disabled={page === response.metadata.pages} onClick={onNext} className="btn btn-sm btn-outline-secondary">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>

            <div className="col-2">
                <Link className="btn btn-danger btn-sm"
                    to="/products/new">
                    Add Product
                </Link>
            </div>
        </div>
        {
            response.data.map(
                product => <ProductItem key={product._id} product={product} />
            )
        }
    </div>;
}

export default ProductList;


