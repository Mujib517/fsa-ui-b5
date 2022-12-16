import React, { Component } from 'react';
import axios from 'axios';
import ProductItem from './Product';
import Error from '../common/Error';
import ShouldRender from '../common/ShouldRender';
import { Link } from 'react-router-dom';

class ProductList extends Component {

    state = {
        response: {
            metadata: {},
            data: []
        },
        hasError: false
    }

    constructor() {
        super();

        axios.get('https://fsa-api-b4.onrender.com/api/products/page/1/limit/10')
            .then(res => this.setState({ response: res.data, hasError: false }))
            .catch(err => this.setState({ hasError: true }));
    }

    render() {
        return <div className="container">
            <h4>Products</h4>
            <Link className="btn btn-danger btn-sm"
                to="/products/new">
                Add Product
            </Link>
            <ShouldRender cond={this.state.hasError}>
                <Error />
            </ShouldRender>
            {
                this.state.response.data.map(
                    product => <ProductItem product={product} />
                )
            }
        </div>;
    }
}

export default ProductList;


