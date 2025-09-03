import React from 'react';
import navigateAndLog from './navigateAndLog';

// https://www.freepik.com/premium-vector/property-division-abstract-concept-vector-illustration-divorce-property-agreement-division-spouses-separation-process-lawyer-service-legal-equitable-distribution-abstract-metaphor_24122182.htm
import front_image from '../assets/images/hero_image_isadora_04.jpg';

const Hero = () => {
    return (
        <div className="hero-container" id="hero">
            <div className="hero-text">
                <h1>Isadora Urel</h1>
                <h2>Especialista em Direito das Famílias, Sucessões &amp; Planejamento Patrimonial</h2>
                <p>Com abordagem humanizada e multidisciplinar, vou traçar estratégias jurídicas para os momentos mais importantes da sua família.</p>
                <button className="atendimento-button" onClick={() => navigateAndLog('#contact', 'hero_contact-button', { button_location: 'hero_cta', service_interest: 'atendimento' })}>Atendimento</button>
            </div>
            <div className="hero-image">
                <img src={front_image} alt="Isadora Urel" />
            </div>
        </div>
    );
}

export default Hero;
