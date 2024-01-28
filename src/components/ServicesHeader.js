import React from 'react';
import TypingEffect from './TypingEffect';

import '../styles/TypedText.css';

const ServicesHeaderSection  = () => {
    return (
        <div className="typed-effect-container">
            <TypingEffect 
                text="O direito de família permeia toda a nossa vida, do nascimento ao falecimento, e estou aqui para acompanhar você (e sua família) em todas as fases."
                speed={33} 
                className="typed-text" 
            />
        </div>
    );
};

export default ServicesHeaderSection;
