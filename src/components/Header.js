import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "***REMOVED***",
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
    return (
        <header>
            <nav>
                <ul>
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
