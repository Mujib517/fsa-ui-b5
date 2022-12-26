import React, { Component } from 'react';
import axios from '../utils/axios';
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
            image: ''
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

    onFileChange = (evt) => {
        const newProduct = {
            ...this.state.product,
            image: evt.target.files[0]
        };
        this.setState({ product: newProduct });
    };

    onSave = async (e) => {
        e.preventDefault();
        try {
            // const payload = { ...this.state };
            // delete payload.hasError;
            // delete payload.success;
            // single page app
            const productToBeAdded = { ...this.state.product };
            productToBeAdded.inStock = !!productToBeAdded.inStock;
            console.log(productToBeAdded);
            // application/json
            // binary

            const formData = new FormData();
            // formData.append('brand', productToBeAdded.brand);
            // formData.append('model', productToBeAdded.model);
            // formData.append('inStock', productToBeAdded.inStock);
            // formData.append('price', productToBeAdded.price);
            // formData.append('discount', productToBeAdded.discount);
            // formData.append('image', productToBeAdded.image);
            // reflection, bracket notation
            for (let key in productToBeAdded) {
                formData.append(key, productToBeAdded[key]);
            }
            await axios.post('/api/products', formData);
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
        const { brand, model, price, discount } = this.state.product;

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
                    <div className="mb-3">
                        <label for="brand" className="form-label">Brand</label>
                        <input value={brand}
                            onChange={this.onControlChange}
                            name="brand" type="text"
                            className="form-control" id="brand"
                            placeholder="Brand" />
                        {
                            !brand ?
                                <span className="text-danger">Brand required</span>
                                : null
                        }
                    </div>
                    <div className="mb-3">
                        <label for="model" className="form-label">Model</label>
                        <input value={model} onChange={this.onControlChange} name="model" type="text" className="form-control" id="model" placeholder="Model" />
                        <ShouldRender cond={!model}>
                            <span className="text-danger">Model required</span>
                        </ShouldRender>
                    </div>
                    <div className="mb-3">
                        <label for="price" className="form-label">Price</label>
                        <input value={price} onChange={this.onControlChange} name="price" type="text" className="form-control" id="price" placeholder="Price" />
                        <ShouldRender cond={!price}>
                            <span className="text-danger">Price required</span>
                        </ShouldRender>
                    </div>
                    <div className="mb-3">
                        <label for="inStock" className="form-check-label">In Stock?</label>
                        <input onChange={this.onControlChange} name="inStock" className="form-check-input" type="checkbox" id="inStock" />
                    </div>
                    <div className="mb-3">
                        <label for="discount" className="form-label">Discount</label>
                        <input value={discount} onChange={this.onControlChange} name="discount" type="text" className="form-control" id="discount" placeholder="Discount" />
                    </div>
                    <div className="mb-3">
                        <label for="image" className="form-label">Image</label>
                        <input onChange={this.onFileChange} name="image" type="file" className="form-control" />
                    </div>
                    <div className="mb-3">
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

