import React from 'react';

const SideNav = props => {
    return(
        <section className="side-nav" id="side-nav">
            <nav>
                <a href="#welcome">Welcome</a>
                <a href="#about">About Me</a>
                <a href="#work">Work</a>
                <a href="#contact">Get In Touch</a>
            </nav>
        </section>
    );
}

export default SideNav;