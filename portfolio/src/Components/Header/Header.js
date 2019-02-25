import React from 'react';
import './Header.css';

import NavBar from '../Navigation/NavBar';

const Header= props => {
    return(
        <header className="app-header">
            <h1 className="title">Rosilio Roman</h1>
            <NavBar />
        </header>
    );
}

export default Header;