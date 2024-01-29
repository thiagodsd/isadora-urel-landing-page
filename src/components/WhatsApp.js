import React from 'react';

import '../styles/WhatsApp.css';

import contact_instagram_image from '../assets/images/contact_instagram.png';
import contact_linkedin_image from '../assets/images/contact_linkedin.png';
import contact_lattes_image from '../assets/images/contact_lattes.png';
import contact_whatsapp_image from '../assets/images/contact_whatsapp.png';
import contact_email_image from '../assets/images/contact_email.png';

const WhatsApp = () => {
    return (
        <div className="whatsapp-container" id="contact">
            <p>
                Entre em contato indicando o serviço desejado
            </p>
            <div className="whatsapp-list">
                <div className="whatsapp-section">
                    <a href="https://wa.me/5518991359552" target="_blank" rel="noreferrer">
                        <div className="whatsapp-image">
                            <img src={contact_whatsapp_image} alt="WhatsApp" />
                        </div>
                        <div className="whatsapp-text">
                            <p>18 9 9135 9552</p>
                        </div>
                    </a>
                    <a href="mailto:dra.isadora-urel@isadoraurel.adv.br" target="_blank" rel="noreferrer">
                        <div className="whatsapp-image">
                            <img src={contact_email_image} alt="E-mail" />
                        </div>
                        <div className="whatsapp-text">
                            <p>dra.isadora-urel@isadoraurel.adv.br</p>
                        </div>
                    </a>
                </div>
                <div className="whatsapp-section">
                    <a href="https://www.instagram.com/isadoraurel/" target="_blank" rel="noreferrer">
                        <div className="whatsapp-image">
                            <img src={contact_instagram_image} alt="Instagram" />
                        </div>
                        <div className="whatsapp-text">
                            <p>@isadoraurel</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/isadoraurel/" target="_blank" rel="noreferrer">
                        <div className="whatsapp-image">
                            <img src={contact_linkedin_image} alt="LinkedIn" />
                        </div>
                        <div className="whatsapp-text">
                            <p>in/isadoraurel</p>
                        </div>
                    </a>
                    <a href="http://lattes.cnpq.br/7746942732180282" target="_blank" rel="noreferrer">
                        <div className="whatsapp-image">
                            <img src={contact_lattes_image} alt="Lattes" />
                        </div>
                        <div className="whatsapp-text">
                            <p>Isadora Urel</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default WhatsApp;
