import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBc8fI1SlSsWzf5KG_Rly6eu5ostIcybLQ",
    authDomain: "isadora-urel-landing-page.firebaseapp.com",
    projectId: "isadora-urel-landing-page",
    storageBucket: "isadora-urel-landing-page.appspot.com",
    messagingSenderId: "421904175792",
    appId: "1:421904175792:web:15fa59663b19d545706175",
    measurementId: "G-1NJ9WHX9N5"
};

const Header = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const navigateAndLog = (target, label) => {
        window.location.href = target;
        console.log(`navigating to ${label}`);
        logEvent(analytics, `landing-page_header-click_${label}`);
    };

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        document.querySelector('.hamburger-icon').blur();
    }

    const hamburger = document.querySelector('.hamburger-icon');
    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('clicked');
    });

    return (
        <header>
            <nav>
                <div className={`hamburger-icon ${isMenuVisible ? 'active' : ''}`} onClick={toggleMenu}>&#9776;</div>
                <ul className={`menu ${isMenuVisible ? 'visible' : ''}`}>
                    <li><button onClick={() => navigateAndLog('#services', 'services')}>Serviços</button></li>
                    <li><button onClick={() => navigateAndLog('#about', 'about')}>Sobre</button></li>
                    <li><button onClick={() => navigateAndLog('#contact', 'contact')}>Contato</button></li>
                </ul>
                {/* <button className="atendimento-button" onClick={() => navigateAndLog('#atendimento', 'atendimento')}>Atendimento</button> */}
            </nav>
        </header>
    );
}

export default Header;
