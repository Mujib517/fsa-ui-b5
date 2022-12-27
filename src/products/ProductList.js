import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import ProductItem from './Product';
import Error from '../common/Error';
import ShouldRender from '../common/ShouldRender';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [response, setResponse] = useState({
        metadata: {},
        data: []
    });
    const [hasError, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [dir, setDir] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios().get(`/api/products/page/${page}/limit/${limit}?search=${filter}&sort=${sort}&direction=${dir}`)
            .then(res => {
                setError(false);
                setResponse(res.data);
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    navigate('/login');
                } else
                    setError(true);
            });
    }, [page, limit, filter, sort]);

    const onDeleteNotify = () => {
        // refresh
        axios.get(`/api/products/page/${page}/limit/${limit}?search=${filter}&sort=${sort}&direction=${dir}`)
            .then(res => {
                setError(false);
                setResponse(res.data);
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    navigate('/login');
                } else
                    setError(true);
            });
    };

    const onPrev = () => {
        if (page > 1)
            setPage(page - 1);
    }
    const onNext = () => {
        if (page < response.metadata.pages)
            setPage(page + 1);
    };

    const onLimitChange = (evt) => {
        setLimit(evt.target.value);
    };

    const onSearchChange = (evt) => {
        setSearch(evt.target.value);
    };

    const onSearch = () => {
        setFilter(search);
    };

    const onSortChange = (evt) => {
        const selectedValue = evt.target.value;
        if (selectedValue) {
            const tokens = selectedValue.split(':');
            setSort(tokens[0]);
            setDir(tokens[1]);
        } else {
            setSort('');
            setDir(null);
        }
    };

    return <div className="container">
        <h4>Products</h4>
        <ShouldRender cond={hasError}>
            <Error />
        </ShouldRender>
        <div className="row m-2">
            <div className="col-1">
                <button disabled={page === 1} onClick={onPrev}
                    className="btn btn-sm btn-outline-secondary m-1">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button disabled={page === response.metadata.pages}
                    onClick={onNext} className="btn btn-sm btn-outline-secondary">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div className="col-2 m-1">
                <span>Page {page} of {response.metadata.pages}</span>
            </div>
            <div className="col-3 search-box">
                {/* 
                <button onClick={onSearch} className="btn btn-sm btn-outline-primary">
                    <i class="fa-solid fa-search"></i>
                </button> */}

                <div class="input-group mb-3">
                    <input value={search} onChange={onSearchChange} placeholder="Search" type="text" class="form-control" />
                    <button onClick={onSearch} className="input-group-text btn btn-md btn-outline-secondary">
                        <i class="fa-solid fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="col-1">
                <select onChange={onLimitChange} className="form-select">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
            <div className="col-2">
                <select className="form-select" onChange={onSortChange}>
                    <option value="">Sort By</option>
                    <option value="price:asc">Price Low to High</option>
                    <option value="price:desc">Price High to Low</option>
                    <option value="brand:asc">Brand Ascending</option>
                    <option value="brand:desc">Brand Descending</option>
                    <option value="model:asc">Model Ascending</option>
                    <option value="model:desc">Model Descending</option>
                </select>
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
                product => <ProductItem key={product._id} product={product} onNotify={onDeleteNotify} />
            )
        }
    </div >;
}

export default ProductList;


