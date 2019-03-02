import React from 'react';
import './Content.css';
import SelfPortrait from '../../images/self-portrait.JPG';

const AboutMe = props => {
    return (
        <section className="content-container">
            <h3>
                {`{ About_Me }`}
            </h3>
            <div className="about-me-content">
                <div className="about-me-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum orci nec sodales dapibus. Pellentesque nibh libero, bibendum non ultricies dapibus, interdum quis mi. Mauris gravida sapien ac nisl faucibus congue. Vivamus in malesuada justo.
                    </p>
                    <p>
                    Nam est ante, consequat sed ultrices vel, facilisis ac metus. Etiam lobortis ante dolor, at porttitor massa pellentesque sed. Aliquam bibendum posuere est, eget lobortis metus semper id. Fusce eu bibendum enim. Sed dapibus eget ante mattis lacinia. Sed at mi sed sapien placerat aliquet.
                    </p>
                </div>
                <div className="about-me-pic">
                    <img
                        src={SelfPortrait}
                        alt="Portrait of Rosilio Roman"
                        className="self-portrait"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;