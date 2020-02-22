import React from 'react';
import Product from '../Product/Product';
import './catalog.scss';

function Catalog(props) {
    let catalog = props.catalog;

    let catalogList = catalog.map((elem) => {
        return (
            <li className="catalog__item product" key="elem.id">
                <Product name={elem.name} price={elem.price} img={elem.img}/>
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