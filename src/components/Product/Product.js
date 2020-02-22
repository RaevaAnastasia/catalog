import React, { useState } from 'react';

function Product(props) {
    let [status, setStatus] = useState(false);

    return (
        <>
            <img className="product__img" src="props.img" alt={props.name}/>
            <h2 className="product__name">{props.name}</h2>
            <p className="product__price">{props.price} руб. / кг</p>
            <button className="product__button">{status ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
        </>
    );
}

export default Product;