import React, { useState } from 'react';
import navigateAndLog from './navigateAndLog';

import logo_image from '../assets/images/logo_03.png';


const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src={logo_image} alt="icone de arvore minimalista" />
                    </a>
                    <p>Isadora Urel</p>
                </div>
                <div className={`hamburger ${isMenuVisible ? 'clicked' : ''}`} onClick={toggleMenu}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <ul className={`menu ${isMenuVisible ? 'visible' : ''}`}>
                    <li><button onClick={() => navigateAndLog('#services', 'header_services-item')}>Serviços</button></li>
                    <li><button onClick={() => navigateAndLog('#about', 'header_about-item')}>Sobre</button></li>
                    <li><button onClick={() => navigateAndLog('#contact', 'header_contact-item')}>Contato</button></li>
                </ul>
                {/* <button className="atendimento-button" onClick={() => navigateAndLog('#atendimento', 'atendimento')}>Atendimento</button> */}
            </nav>
        </header>
    );
}

export default Header;
