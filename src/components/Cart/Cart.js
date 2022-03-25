import React from 'react';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <h1>Collecting Bat</h1>
            {
                props.cart.map(item => <CartItems key={item.id} item={item}></CartItems>)
            }
            <button onClick={props.randomItem} className='btn'><p>Choose For Me</p></button>
            {/* <p>{props.cooseItem.name}</p> */}
            <button className='btn'><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;