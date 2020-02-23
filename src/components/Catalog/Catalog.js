import React from 'react';
import Product from '../Product/Product';
import './catalog.scss';

function Catalog(props) {
    let catalog = props.catalog;

    let catalogList = catalog.map((elem) => {
        return (
            <li className="catalog__item product" key={elem.id}>
                <Product name={elem.name} 
                        price={elem.price} 
                        img={elem.img}
                        decreaseCounter={props.decrease}
                        increaseCounter={props.increase}
                        counter={props.counter}
                        id = {elem.id}
                        />
            </li>
        );
    });

    return(
        <ul className="catalog container">
            {catalogList}
        </ul>
    );
}

export default Catalog;