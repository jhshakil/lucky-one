import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
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
        if (cart.length !== 0) {
            const random = Math.floor(Math.random() * cart.length)
            // const cooseItem = [cart[random]];
            // setCart(cooseItem)
            const cooseItem = cart[random];
            alert('Your Coosing Item is : ' + cooseItem.name)
            // console.log(cooseItem)
        }
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
            <div className="blog-container">
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Shop;