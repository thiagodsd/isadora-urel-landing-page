import React from 'react';
import navigateAndLog from './navigateAndLog';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container" id="foot">
                <div className="footer-section">
                    <div className="footer-text">
                        <p>Site desenvolvido por</p>
                        <a href="https://dszero.com.br/" target="_blank" rel="noreferrer" onClick={() => navigateAndLog('#foot', 'footer_dszero-button')}>
                            &#948;S
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
