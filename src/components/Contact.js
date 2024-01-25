import React from 'react';
import '../Contact.css'; // Ensure to create this CSS file

import contact_00_img from '../assets/images/contact_00_white.png';
import contact_01_img from '../assets/images/contact_01_white.png';
import contact_02_img from '../assets/images/contact_02_white.png';
import contact_03_img from '../assets/images/contact_03_white.png';

function ContactSection() {
    return (
        <div className="contact-container" id="contact" data-aos="fade-up">
            {/* <h1>Serviços</h1> */}
        <div className="contact-section">
            <div className="contact">
                <div className="contact-image">
                    <img src={contact_00_img} alt="About Us" />
                </div>
                <div className="contact-text">
                    <h2>Atendimento</h2>
                    <p>
                        Navegar por questões jurídicas pode ser um processo complicado e gerar tensão. Compreendemos que este é um período delicado, e encontrar um profissional que inspire confiança e ofereça acolhimento representa um desafio significativo, especialmente em casos de direito de família e sucessões.
                    </p>
                    <br/>
                    <p>
                        Com o objetivo de proporcionar o suporte essencial neste momento crucial, reservamos um horário especial em nossa agenda para atendê-lo(a) online. Assim, você terá a oportunidade de expor suas necessidades e preocupações e conhecer nossa especialista, que está pronta para orientá-lo(a) com empatia e expertise.
                    </p>
                </div>
            </div>
            <div className="contact">
                <div className="contact-image">
                    <img src={contact_01_img} alt="About Us" />
                </div>
                <div className="contact-text">
                    <h2>Consulta</h2>
                    <p>
                        Navegar por questões jurídicas pode ser um processo complicado e gerar tensão. Compreendemos que este é um período delicado, e encontrar um profissional que inspire confiança e ofereça acolhimento representa um desafio significativo, especialmente em casos de direito de família e sucessões.
                    </p>
                    <br/>
                    <p>
                        Com o objetivo de proporcionar o suporte essencial neste momento crucial, reservamos um horário especial em nossa agenda para atendê-lo(a) online. Assim, você terá a oportunidade de expor suas necessidades e preocupações e conhecer nossa especialista, que está pronta para orientá-lo(a) com empatia e expertise.
                    </p>
                </div>
            </div>
            <div className="contact">
                <div className="contact-image">
                    <img src={contact_02_img} alt="About Us" />
                </div>
                <div className="contact-text">
                    <h2>Parceria</h2>
                    <p>
                        Navegar por questões jurídicas pode ser um processo complicado e gerar tensão. Compreendemos que este é um período delicado, e encontrar um profissional que inspire confiança e ofereça acolhimento representa um desafio significativo, especialmente em casos de direito de família e sucessões.
                    </p>
                    <br/>
                    <p>
                        Com o objetivo de proporcionar o suporte essencial neste momento crucial, reservamos um horário especial em nossa agenda para atendê-lo(a) online. Assim, você terá a oportunidade de expor suas necessidades e preocupações e conhecer nossa especialista, que está pronta para orientá-lo(a) com empatia e expertise.
                    </p>
                </div>
            </div>
            <div className="contact">
                <div className="contact-image">
                    <img src={contact_03_img} alt="About Us" />
                </div>
                <div className="contact-text">
                    <h2>Mentoria</h2>
                    <p>
                        Navegar por questões jurídicas pode ser um processo complicado e gerar tensão. Compreendemos que este é um período delicado, e encontrar um profissional que inspire confiança e ofereça acolhimento representa um desafio significativo, especialmente em casos de direito de família e sucessões.
                    </p>
                    <br/>
                    <p>
                        Com o objetivo de proporcionar o suporte essencial neste momento crucial, reservamos um horário especial em nossa agenda para atendê-lo(a) online. Assim, você terá a oportunidade de expor suas necessidades e preocupações e conhecer nossa especialista, que está pronta para orientá-lo(a) com empatia e expertise.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ContactSection;
