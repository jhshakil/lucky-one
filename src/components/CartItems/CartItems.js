import React from 'react';
import './CartItems.css'

const CartItems = (props) => {

    return (
        <div className='cart-items'>
            <p>{props.item.name}</p>
        </div>
    );
};

export default CartItems;