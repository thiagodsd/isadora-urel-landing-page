import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// https://www.freepik.com/premium-vector/property-division-abstract-concept-vector-illustration-divorce-property-agreement-division-spouses-separation-process-lawyer-service-legal-equitable-distribution-abstract-metaphor_24122182.htm
import front_image from '../assets/images/hero_image_isadora_04.jpg';

const firebaseConfig = {
    apiKey: "***REMOVED***",
    authDomain: "isadora-urel-landing-page.firebaseapp.com",
    projectId: "isadora-urel-landing-page",
    storageBucket: "isadora-urel-landing-page.appspot.com",
    messagingSenderId: "421904175792",
    appId: "1:421904175792:web:15fa59663b19d545706175",
    measurementId: "G-1NJ9WHX9N5"
};

const Hero = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const navigateAndLog = (target, label) => {
        window.location.href = target;
        console.log(`navigating to ${label}`);
        logEvent(analytics, `landing-page_header-click_${label}`);
    };

    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>Isadora Urel</h1>
                <h2>Especialista em Direito das Famílias, Sucessões &amp; Planejamento Patrimonial</h2>
                <p>Com abordagem humanizada e multidisciplinar, vou traçar estratégias jurídicas para os momentos mais importantes da sua família.</p>
                <button className="atendimento-button" onClick={() => navigateAndLog('#contact', 'contact')}>Atendimento</button>
            </div>
            <div className="hero-image">
                <img src={front_image} alt="Isadora Urel" />
            </div>
        </div>
    );
}

export default Hero;
