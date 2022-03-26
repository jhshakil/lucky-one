import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, steProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => steProduct(data))
    }, [])
    const addToCart = (setProduct) => {
        let newCart = [];
        const item = cart.find(product => product.id === setProduct.id)
        if (!item) {
            newCart = [...cart, setProduct];
        } else {
            const uniqueItem = cart.filter(product => product.id !== setProduct.id)
            newCart = [...uniqueItem, item]
        }
        setCart(newCart);
    }
    const randomItem = () => {
        const random = Math.floor(Math.random() * cart.length)
        let cooseItem = cart[random];
        setCart([cooseItem])
    }
    const refresh = () => {
        const reloade = [];
        setCart(reloade);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Products key={product.id} product={product} addToCart={addToCart}></Products>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} randomItem={randomItem} refresh={refresh}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;