import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container" id="contact">
                <div className="footer-section">
                    <div className="footer-text">
                        <p>Site desenvolvido por</p>
                        <a href="https://dszero.com.br/" target="_blank" rel="noreferrer">
                            &#948;S
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
