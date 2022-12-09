import React from 'react';
import Product from './Product';

// container: contains data
// maintining data & presenting data
// presenation
const ProductList = () => {

    const data = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 800, inStock: true, discount: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgsdDEGDNGvzh8WoxIiAqRUzF5YsTpusf_z7HFGHqz13rtJc5FpwFh4tp549Wt-AglLpz65XIaKzMjDsXXxatUEUynCQ&usqp=CAc' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 900, inStock: false, discount: 0, image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539" },
        { id: 3, brand: 'Samsung', model: 'Galaxy S22 Ultra', price: 1200, inStock: true, discount: 15, image: "https://m.media-amazon.com/images/I/71JT7AirReL._SX679_.jpg" }
    ];

    return <div>
        <h1>Products</h1>
        {data.map(p => <Product product={p} />)}
    </div>
};

export default ProductList;
