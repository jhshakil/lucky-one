import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const { id, name, picture, price } = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <h3>Price: {price}</h3>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon className='btn-text' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;