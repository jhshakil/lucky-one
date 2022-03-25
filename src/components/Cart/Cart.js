import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = (props) => {
    let itemId = [];
    return (
        <div className='cart'>
            <h1>Selected Bat {props.cart.length}</h1>
            {
                props.cart.map(item => <CartItems key={item.id} item={item}></CartItems>)
                // props.cart.map(item => {
                //     itemId.push(item.id);
                //     if (itemId.find(item.id)) {
                //         <CartItems key={item.id} item={item}></CartItems>
                //     }
                // })
            }
            <button className='btn'><p>Choose For Me</p></button>
            <button className='btn'><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;