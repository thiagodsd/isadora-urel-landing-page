import React from 'react';
import '../WhatsApp.css';

import contact_04_img from '../assets/images/contact_04_white.png';

const WhatsApp = () => {
    return (
        <div className="whatsapp-container" id="contact">
            <div className="whatsapp-section">
                <div className="whatsapp-image">
                    <img src={contact_04_img} alt="About Us" />
                </div>
                <div className="whatsapp-text">
                    <a href="https://wa.me/5518991359552" target="_blank" rel="noreferrer">
                        <p>18 9 9135 9552</p>
                    </a>
                </div>
            </div>
        </div>  
    );
}

export default WhatsApp;
