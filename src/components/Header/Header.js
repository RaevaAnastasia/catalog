import React from 'react';
import Cart from '../Cart/Cart';
import './header.scss';

function Header(props) {
    return (
        <header className="header">
            <div className="header__wrapper container">
                <span className="header__logo">FreshFood</span>
                <Cart counter={props.counter} />
            </div> 
        </header>
    );
}

export default Header;