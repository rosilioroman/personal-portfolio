import React from 'react';
import './Navigation.css';

const SideNav = props => {
    return(
        <section className="side-nav">
            <nav className="nav-container">
                <a href="#welcome" className="navlink">Welcome</a>
                <a href="#about" className="navlink">About Me</a>
                <a href="#projects" className="navlink">Projects</a>
                <a href="#contact" className="navlink">Get In Touch</a>
            </nav>
        </section>
    );
}

export default SideNav;