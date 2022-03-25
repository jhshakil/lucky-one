import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, steProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => steProduct(data))
    }, [])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Products key={product.id} product={product}></Products>)
                    }
                </div>
                <div className="cart-container">
                    <h2>This is cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;