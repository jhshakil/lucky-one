import React from 'react';
import './CartItems.css'

const CartItems = (props) => {
    const { name } = props.item;
    return (
        <div className='cart-items'>
            <p>{name}</p>
        </div>
    );
};

export default CartItems;