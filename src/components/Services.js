import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/Services.css';

import image_0 from '../assets/images/services_tree_00_white.png';
import image_1 from '../assets/images/services_tree_01_white.png';
import image_2 from '../assets/images/services_tree_02_white.png';
import image_3 from '../assets/images/services_tree_03_white.png';

function ServicesSection() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="services-container" id="services" data-aos="fade-up">
            <div className="services-section">
                <div className="service">
                    <div className="image-container">
                        <img src={image_0} alt="Imagem de semente no início do processo de germinação" loading="lazy" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Início da Vida &nbsp;</span>
                        </p>
                    </div>
                    <div className="text-container">
                        <ul>
                            <li><p>contratos de técnica de reprodução humana assistida</p></li>
                            <li><p>planos de parto</p></li>
                            <li><p>alimentos gravídicos</p></li>
                            <li><p>investigações de paternidade</p></li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_1} alt="Imagem de uma planta enraizando e desenvolvendo ramificações" loading="lazy" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Bases Sólidas &nbsp;</span>
                        </p>
                    </div>
                    <div className="text-container">
                        <ul>
                            <li><p>contratos de namoro e de união estável</p></li>
                            <li><p>pactos antenupciais</p></li>
                            <li><p>divórcio e partilha de bens</p></li>
                            <li><p>modificação de regime de bens</p></li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_2} alt="Imagem de uma árvore em processo de enraizamento e crescimento" loading="lazy" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Crescimento &nbsp;</span>
                        </p>
                    </div>
                    <div className="text-container">
                        <ul>
                            <li><p>regulamentação & revisão de guarda e regime de convivência</p></li>
                            <li><p>fixação e revisão de pensão alimentícia</p></li>
                            <li><p>alienação parental</p></li>
                            <li><p>adoção</p></li>
                            <li><p>reconhecimento de paternidade & maternidade socioafetiva</p></li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_3} alt="Imagem de uma árvore com a copa frutificando ao lado de cesta de frutas" loading="lazy" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Legado &nbsp;</span>
                        </p>
                    </div>
                    <div className="text-container">
                        <ul>
                            <li><p>planejamento sucessório</p></li>
                            <li><p>elaboração de testamentos e de diretivas de última vontade</p></li>
                            <li><p>curatela</p></li>
                            <li><p>inventário</p></li>
                            <li><p>fraude patrimonial</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
