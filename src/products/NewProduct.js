import React, { Component } from 'react';
import axios from 'axios';
import ShouldRender from '../common/ShouldRender';
import Error from '../common/Error';

/*
    1. Create component
    2. UI (controls)
    3. Collect data & update state
    4. push to api
*/

class NewProduct extends Component {

    state = {
        product: {
            brand: '',
            model: '',
            inStock: false,
            price: '',
            discount: '',
        },
        success: false,
        hasError: false,
    };

    // refactoring
    onControlChange = (evt) => {
        const productState = {
            ...this.state.product,
            [evt.target.name]: evt.target.value
        };

        this.setState({ product: productState });
    }

    onSave = async (e) => {
        e.preventDefault();
        try {
            // const payload = { ...this.state };
            // delete payload.hasError;
            // delete payload.success;
            // single page app
            this.state.product.inStock = !!this.state.product.inStock;
            await axios.post('https://fsa-api-b4.onrender.com/api/products', this.state.product);
            this.setState({
                success: true,
                hasError: false,
                product: {
                    brand: '',
                    model: '',
                    inStock: false,
                    price: '',
                    discount: '',
                }
            });
        } catch (e) {
            // error
            this.setState({ hasError: true, success: false });
        }
    }

    render() {
        const { hasError, success } = this.state;
        const { brand, model, price, inStock, discount } = this.state.product;

        return <div className="container m-3">
            <h4>Add New Product</h4>
            <ShouldRender cond={hasError}>
                <Error />
            </ShouldRender>
            <ShouldRender cond={success}>
                <div className="alert alert-success">
                    Successfully operation completed.
                </div>
            </ShouldRender>
            <div className="col-4">
                <form onSubmit={this.onSave}>
                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <input value={brand}
                            onChange={this.onControlChange}
                            name="brand" type="text"
                            class="form-control" id="brand"
                            placeholder="Brand" />
                        {
                            !brand ?
                                <span className="text-danger">Brand required</span>
                                : null
                        }
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Model</label>
                        <input value={model} onChange={this.onControlChange} name="model" type="text" class="form-control" id="model" placeholder="Model" />
                        <ShouldRender cond={!model}>
                            <span className="text-danger">Model required</span>
                        </ShouldRender>
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input value={price} onChange={this.onControlChange} name="price" type="text" class="form-control" id="price" placeholder="Price" />
                        <ShouldRender cond={!price}>
                            <span className="text-danger">Price required</span>
                        </ShouldRender>
                    </div>
                    <div class="mb-3">
                        <label for="inStock" class="form-check-label">In Stock?</label>
                        <input onChange={this.onControlChange} name="inStock" className="form-check-input" type="checkbox" id="inStock" />
                    </div>
                    <div class="mb-3">
                        <label for="discount" class="form-label">Discount</label>
                        <input value={discount} onChange={this.onControlChange} name="discount" type="text" class="form-control" id="discount" placeholder="Discount" />
                    </div>
                    <div class="mb-3">
                        <button disabled={!brand || !model || !price} type="submit" className="btn btn-success">
                            Save
                            <i className="fa fa-save"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>;
    }
}

export default NewProduct;

