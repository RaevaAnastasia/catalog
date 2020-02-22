import React, {useState} from 'react';
import './cart.scss';

function Cart() {
    let [cartSum, setCartSum ] = useState(0);

    return (
        <div className="cart">
            <img className="cart__img" src={require('../../images/cart.svg')} alt="Корзина" />
            <span className="cart__counter">{cartSum}</span>
        </div>
    );
}

export default Cart;