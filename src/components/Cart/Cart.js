import React, {useState} from 'react';
import './cart.scss';

function Cart(props) {

    return (
        <div className="cart">
            <img className="cart__img" src={require('../../images/cart.svg')} alt="Корзина" />
            <span className="cart__counter">{props.counter}</span>
        </div>
    );
}

export default Cart;