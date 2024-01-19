import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';
import '../Services.css'; // Ensure to create this CSS file

import image_0 from '../assets/images/services_tree_00.png';
import image_1 from '../assets/images/services_tree_01.png';

function ServicesSection() {
    const lorem = new LoremIpsum();
    const loremParagraph_1 = lorem.generateParagraphs(1);
    const loremParagraph_2 = lorem.generateParagraphs(1);
    // const loremParagraph_3 = lorem.generateParagraphs(1);
    return (
        <div className="services-container" id="services">
            {/* <h1>Sobre</h1> */}
            <div className="services-section">
                <div className="image-container">
                    <img src={image_0} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>{loremParagraph_1}</p>
                </div>
            </div>
            <div className="services-section">
                <div className="image-container">
                    <img src={image_1} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>{loremParagraph_2}</p>
                </div>
            </div>
            {/* <div className="services-section">
                <div className="image-container">
                    <img src={image} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>{loremParagraph_3}</p>
                </div>
            </div> */}
        </div>
    );
}

export default ServicesSection;
