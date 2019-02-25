import React from 'react';
import './Footer.css';

const Footer = props => {
    return(
        <footer className="footer-container">
            <div className="footer-links">
                <div className="f-link">
                    <a href="/">
                        <i className="fas fa-file-alt"></i>
                    </a>
                </div>
                <div className="f-link">
                    <a 
                        href="https://github.com/rosilioroman" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="f-link">
                    <a 
                        href="https://www.linkedin.com/in/rosilio-roman/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;