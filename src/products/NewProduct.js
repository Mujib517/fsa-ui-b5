import React, { Component } from 'react';

class NewProduct extends Component {

    state = {
        brand: '',
        model: '',
        inStock: false,
        price: 0,
        discount: 0,
    };

    onControlChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    onSave = () => {
        console.log(this.state);
    }

    render() {
        return <div className="container m-3">
            <h4>Add New Product</h4>
            <div className="col-4">
                <form>
                    <div class="mb-3">
                        <label for="brand" class="form-label">Brand</label>
                        <input onChange={this.onControlChange} name="brand" type="text" class="form-control" id="brand" placeholder="Brand" />
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Model</label>
                        <input onChange={this.onControlChange} name="model" type="text" class="form-control" id="model" placeholder="Model" />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input onChange={this.onControlChange} name="price" type="text" class="form-control" id="price" placeholder="Price" />
                    </div>
                    <div class="mb-3">
                        <label for="inStock" class="form-check-label">In Stock?</label>
                        <input onChange={this.onControlChange} name="inStock" className="form-check-input" type="checkbox" id="inStock" />
                    </div>
                    <div class="mb-3">
                        <label for="discount" class="form-label">Discount</label>
                        <input onChange={this.onControlChange} name="discount" type="text" class="form-control" id="discount" placeholder="Discount" />
                    </div>
                    <div class="mb-3">
                        <button type="button" onClick={this.onSave} className="btn btn-success">
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

