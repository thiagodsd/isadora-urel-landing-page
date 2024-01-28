import React from 'react';
import TypingEffect from './TypingEffect';

import '../styles/TypedText.css';

const AboutHeaderSection  = () => {
    return (
        <div className="typed-effect-container">
            <TypingEffect 
                text="Sou Isadora Urel, advogada, professora, palestrante e principalmente apaixonada por todo esse universo."
                speed={33} 
                className="typed-text" 
            />
        </div>
    );
};

export default AboutHeaderSection;
