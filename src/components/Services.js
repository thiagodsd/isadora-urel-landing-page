import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Services.css'; 

import image_0 from '../assets/images/services_tree_00_white.png';
import image_1 from '../assets/images/services_tree_01_white.png';

function ServicesSection() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="services-container" id="services" data-aos="fade-up">
            {/* <h1>Sobre</h1> */}
            <div className="services-section">
                <div className="service">
                    <div className="image-container">
                        <img src={image_0} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p><b>A Semente</b> &mdash; Como sua advogada familiarista, ofereço <span className="highlight-on-scroll" data-aos="highlight">acompanhamento especializado em contratos de técnica de reprodução humana assistida</span>, garantindo que seus direitos e expectativas sejam plenamente respeitados neste momento tão significativo. Também me dedico a elaborar <span className="highlight-on-scroll" data-aos="highlight">planos de parto</span> personalizados, assegurando que suas preferências sejam legalmente reconhecidas. No campo da paternidade, conduzo <span className="highlight-on-scroll" data-aos="highlight">investigações de paternidade</span> com sensibilidade e precisão, buscando esclarecer e estabelecer vínculos familiares importantes. Além disso, ofereço suporte em casos de <span className="highlight-on-scroll" data-aos="highlight">alimentos gravídicos</span>, focando na proteção e no bem-estar da mãe e do bebê durante a gravidez.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_1} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p><b>Ramos em Expansão</b> &mdash; Ofereço serviços que abrangem desde a criação de <span className="highlight-on-scroll" data-aos="highlight">contratos de namoro</span>, preservando independências enquanto celebra o relacionamento, até a elaboração de <span className="highlight-on-scroll" data-aos="highlight">pactos antenupciais</span>, assegurando acordos personalizados para futuros cônjuges. Também elaboro <span className="highlight-on-scroll" data-aos="highlight">contratos de união estável</span>, garantindo reconhecimento e proteção legal. Em momentos de mudança, estruturo e conduzo a <span className="highlight-on-scroll" data-aos="highlight">modificação de regime de bens</span> e, em casos de separação, conduzo processos de <span className="highlight-on-scroll" data-aos="highlight">divórcio</span> e <span className="highlight-on-scroll" data-aos="highlight">partilha de bens</span> com sensibilidade e foco na equidade.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_1} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p>
                        Contrato de namoro; Pacto antenupcial; contrato de união estável; modificação de regime de bens, divórcio e partilha de bens.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_1} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p>
                        Contrato de namoro; Pacto antenupcial; contrato de união estável; modificação de regime de bens, divórcio e partilha de bens.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
