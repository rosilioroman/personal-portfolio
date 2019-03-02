import React from 'react';
import './Content.css';

const LandingPage = props => {
    return(
        <section className="landing-page">
            <h3>
                {`{ Welcome }`}
            </h3>
            <p>
                My name is Rosilio. I am a full-stack web developer. 
            </p>
            <p>
                student @ <a href="https://lambdaschool.com/" className="lambda-link" target="_blank" rel="noopener noreferrer">Lambda School</a>
            </p>
        </section>
    );
}

export default LandingPage;