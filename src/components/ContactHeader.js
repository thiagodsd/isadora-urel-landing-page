import React from 'react';
import TypingEffect from './TypingEffect';

import '../styles/TypedText.css';

const ContactHeaderSection  = () => {
    return (
        <div className="typed-effect-container">
            <TypingEffect 
                text="Ofereço soluções jurídicas personalizadas para diversas necessidades e públicos."
                speed={33} 
                className="typed-text" 
            />
        </div>
    );
};

export default ContactHeaderSection;
