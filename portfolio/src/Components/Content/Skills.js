import React from 'react';
import './Content.css';

const Skills = props => {
    return (
        <section className="content-container">
            <h3>
                {`{ Skills }`}
            </h3>
            <div className="skills-content">
                <h4>{`# Front_End`}</h4>
                <h4>{`# Back_End`}</h4>
                <h4>{`# Other`}</h4>
            </div>
        </section>
    );
}

export default Skills;