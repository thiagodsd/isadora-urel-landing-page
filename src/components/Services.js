import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';
import '../Services.css'; // Ensure to create this CSS file
import image from '../assets/images/arvi.png';

function ServicesSection() {
    const lorem = new LoremIpsum();
    // const loremParagraph_1 = lorem.generateParagraphs(3);
    const loremParagraph_2 = lorem.generateParagraphs(2);
    const loremParagraph_3 = lorem.generateParagraphs(4);
    return (
        <div className="services-container" id="services">
            {/* <h1>Sobre</h1> */}
            <div className="services-section">
                <div className="image-container">
                    <img src={image} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>"As Raízes do Direito de Família": Pensão Alimentícia e Guarda dos Filhos e "Ramificações", envolvendo adolescentes.</p>
                </div>
            </div>
            <div className="services-section">
                <div className="image-container">
                    <img src={image} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>{loremParagraph_2}</p>
                </div>
            </div>
            <div className="services-section">
                <div className="image-container">
                    <img src={image} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>{loremParagraph_3}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
