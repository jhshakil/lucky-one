import React from 'react';
import './Products.css'

const Products = (props) => {
    const { id, name, picture, price } = props.product;
    console.log(props)
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <button className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Products;