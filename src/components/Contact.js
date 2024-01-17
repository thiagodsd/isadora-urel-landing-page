import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';
import '../Contact.css'; // Ensure to create this CSS file

function ContactSection() {
    const lorem = new LoremIpsum();
    const loremParagraph_1 = lorem.generateParagraphs(3);
    const loremParagraph_2 = lorem.generateParagraphs(2);
    const loremParagraph_3 = lorem.generateParagraphs(4);
    return (
        <div className="services-container" id="contact">
            {/* <h1>Serviços</h1> */}
        <div className="services-section">
            <div className="service">
                <h3>Atendimento</h3>
                <p>{loremParagraph_1}</p>
            </div>
            <div className="service">
                <h3>Consulta</h3>
                <p>{loremParagraph_2}</p>
            </div>
            <div className="service">
                <h3>Mentoria</h3>
                <p>{loremParagraph_3}</p>
            </div>
            </div>
        </div>
    );
}

export default ContactSection;
