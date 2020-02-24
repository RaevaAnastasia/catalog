import React, { useState } from 'react';
import './product.scss';

function Product(props) {
    let initialStatus = localStorage.getItem('status' + props.id) || false;
    let [status, setStatus] = useState(initialStatus);

    function increaseCounter() {
        props.increaseCounter(props.counter);
        localStorage.setItem('status' + props.id, true);
    }
    
    function decreaseCounter() {
        props.decreaseCounter(props.counter);
        localStorage.removeItem('status' + props.id);
    }

    function changeStatus() {
        status ? decreaseCounter() : increaseCounter();
        setStatus(!status);
    }

    return (
        <>
            <p className="product__img-wrap">
                <img className="product__img" src={props.img} alt={props.name}/>
            </p>
            <h2 className="product__name">{props.name}</h2>
            <p className="product__price">{props.price} руб. / кг</p>
            <button className="product__button" onClick={changeStatus}>{status ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
        </>
    );
}

export default Product;