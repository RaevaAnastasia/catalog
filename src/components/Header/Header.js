import React from 'react';
import Cart from '../Cart/Cart';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper container">
                <span className="header__logo">FreshFood</span>
                <Cart />
            </div> 
        </header>
    );
}

export default Header;