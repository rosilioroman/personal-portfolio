import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const NavBar = props => {
    return(
        <nav className="main-nav">
            <NavLink exact to="/">Resum&eacute;</NavLink>
            <NavLink exact to="/about">About Me</NavLink>
            <NavLink exact to="/projects">Projects</NavLink>
            <NavLink exact to="/skills">Skills</NavLink>
        </nav>
    );
}

export default NavBar;