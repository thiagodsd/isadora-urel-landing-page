import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";


// import front_image from '../assets/images/landing_page_isa_00_1080_1600.png';
// import front_image from '../assets/images/cube_green_purple_01.png';

// https://www.freepik.com/premium-vector/property-division-abstract-concept-vector-illustration-divorce-property-agreement-division-spouses-separation-process-lawyer-service-legal-equitable-distribution-abstract-metaphor_24122182.htm
// import front_image from '../assets/images/hero_image_no_hammer.png';
import front_image from '../assets/images/hero_image_isadora_00.png';

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
                {/* <p>Guarda de Menores &#x2022; Divórcio &#x2022; Partilha de Bens &#x2022; Testamentos e Heranças &#x2022; Contrato de União Estável &#x2022; Regime de Bens</p> */}
                <p>Com uma abordagem humanizada e multidisciplinar, vou traçar estratégias jurídicas para os momentos mais importantes da sua família, em especial com casais, ex-casais e filhos. O compromisso do meu trabalho é o bem-estar presente e futuro de todos os envolvidos e do seu patrimônio, com foco em soluções  equilibradas e que tragam segurança em cada etapa do processo.</p>
                <button className="atendimento-button" onClick={() => navigateAndLog('#contact', 'contact')}>Atendimento</button>
            </div>
            <div className="hero-image">
                <img src={front_image} alt="React Logo" />
            </div>
        </div>
    );
}

export default Hero;
