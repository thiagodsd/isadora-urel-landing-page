import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';
import '../About.css'; 
import about_image from '../assets/images/landing_page_isa_about.jpg';


function AboutSection() {
    const lorem = new LoremIpsum();
    const loremParagraph = lorem.generateParagraphs(5);
    return (
        <div className="about-container" id="about">
            {/* <h1>Sobre</h1> */}
            <div className="about-section">
                <div className="image-container">
                    <img src={about_image} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>{loremParagraph}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
