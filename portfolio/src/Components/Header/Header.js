import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import NavBar from '../Navigation/NavBar';

const Header= props => {
    return(
        <header className="app-header">
            <Link to="/">
                <h1 className="title">
                    {`{Rosilio_Roman`}<span className="cursor">|</span>{`}`}
                </h1>
            </Link>
            <NavBar />
        </header>
    );
}

export default Header;