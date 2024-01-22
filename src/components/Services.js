import React from 'react';
import '../Services.css'; // Ensure to create this CSS file

import image_0 from '../assets/images/services_tree_00_white.png';
import image_1 from '../assets/images/services_tree_01_white.png';

function ServicesSection() {
    return (
        <div className="services-container" id="services" data-aos="fade-up">
            {/* <h1>Sobre</h1> */}
            <div className="services-section">
                <div className="image-container">
                    <img src={image_0} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>
                    Acompanhamento em contratos de Técnica de Reprodução Humana Assistida, plano de parto, investigação de paternidade, alimentos gravídicos.
                    </p>
                </div>
            </div>
            <div className="services-section">
                <div className="image-container">
                    <img src={image_1} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>
                    Contrato de namoro; Pacto antenupcial; contrato de união estável; modificação de regime de bens, divórcio e partilha de bens.
                    </p>
                </div>
            </div>
            <div className="services-section">
                <div className="image-container">
                    <img src={image_1} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>
                    Regulamentação de guarda, lar referência e regime de convivência, alienação parental, fixação e revisão de pensão, alimentos avoengos, adoção, reconhecimento de paternidade/maternidade socioafetiva. 
                    </p>
                </div>
            </div>
            <div className="services-section">
                <div className="image-container">
                    <img src={image_1} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>
                    Planejamento sucessório, auxílio e elaboração de testamentos, doação, elaboração de diretivas de ultima vontade, curatela, inventário, fraude patrimonial.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
