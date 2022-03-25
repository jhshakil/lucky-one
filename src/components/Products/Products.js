import React from 'react';
import './Products.css'

const Products = (props) => {
    const { id, name, picture, price } = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <h3>Price: {price}</h3>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Products;