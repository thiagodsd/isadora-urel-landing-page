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
            {/* <h1>Sobre</h1> */}
            <div className="services-section">
                <div className="service">
                    <div className="image-container">
                        <img src={image_0} alt="Imagem de semente no início do processo de germinação" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Início da Vida &nbsp;</span> 
                        </p>
                    </div>
                    <div className="text-container">
                        {/* <p>Como sua advogada familiarista, ofereço <span className="highlight-on-scroll" data-aos="highlight">acompanhamento especializado em contratos de técnica de reprodução humana assistida</span>, garantindo que seus direitos e expectativas sejam plenamente respeitados neste momento tão significativo. Também me dedico a elaborar <span className="highlight-on-scroll" data-aos="highlight">planos de parto</span> personalizados, assegurando que suas preferências sejam legalmente reconhecidas. No campo da paternidade, conduzo <span className="highlight-on-scroll" data-aos="highlight">investigações de paternidade</span> com sensibilidade e precisão, buscando esclarecer e estabelecer vínculos familiares importantes. Além disso, ofereço suporte em casos de <span className="highlight-on-scroll" data-aos="highlight">alimentos gravídicos</span>, focando na proteção e no bem-estar da mãe e do bebê durante a gravidez.
                        </p> */}
                        {/* <p>
                            <span className="highlight-on-scroll" data-aos="highlight">contratos de técnica de reprodução humana assistida</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">planos de parto</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">investigações de paternidade</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">alimentos gravídicos</span>
                        </p> */}
                        <ul>
                            <li><p>planos de parto</p></li>
                            <li><p>alimentos gravídicos</p></li>
                            <li><p>contratos de técnica de reprodução humana assistida</p></li>
                            <li><p>investigações de paternidade</p></li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_1} alt="Imagem de uma planta enraizando e desenvolvendo ramificações" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Bases Sólidas &nbsp;</span> 
                        </p>
                    </div>
                    <div className="text-container">
                        {/* <p>De forma análoga, famílias se expandem e diversificam. Nessa fase meus serviços abrangem desde a criação de <span className="highlight-on-scroll" data-aos="highlight">contratos de namoro</span>, preservando independências enquanto celebra o relacionamento, até a elaboração de <span className="highlight-on-scroll" data-aos="highlight">pactos antenupciais</span>, assegurando acordos personalizados para futuros cônjuges. Também elaboro <span className="highlight-on-scroll" data-aos="highlight">contratos de união estável</span>, garantindo reconhecimento e proteção legal. Em momentos de mudança, estruturo e conduzo a <span className="highlight-on-scroll" data-aos="highlight">modificação de regime de bens</span> e, em casos de separação, conduzo processos de <span className="highlight-on-scroll" data-aos="highlight">divórcio</span> e <span className="highlight-on-scroll" data-aos="highlight">partilha de bens</span> com sensibilidade e foco na equidade.
                        </p> */}
                        {/* <p><span className="highlight-on-scroll" data-aos="highlight">contratos de namoro</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">pactos antenupciais</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">contratos de união estável</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">modificação de regime de bens</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">divórcio</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">partilha de bens</span>
                        </p> */}
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
                        <img src={image_2} alt="Imagem de uma árvore em processo de enraizamento e crescimento" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Crescimento &nbsp;</span> 
                        </p>
                    </div>
                    <div className="text-container">
                        {/* <p>
                        Meu papel na sua solidificação familiar é através assistência na <span className="highlight-on-scroll" data-aos="highlight">regulamentação de guarda</span>, focando em um ambiente estável e harmonioso para a criança. Previno e combato situações de <span className="highlight-on-scroll" data-aos="highlight">alienação parental</span>, protegendo os direitos e o bem-estar dos menores. Trabalho com <span className="highlight-on-scroll" data-aos="highlight">fixação e revisão de pensão alimentícia</span>, buscando justiça e equidade financeira. Em casos de <span className="highlight-on-scroll" data-aos="highlight">alimentos avoengos</span>, garanto o suporte essencial de toda a família. Auxilio famílias no processo de <span className="highlight-on-scroll" data-aos="highlight">adoção</span> e atuo no <span className="highlight-on-scroll" data-aos="highlight">reconhecimento de paternidade &amp; maternidade socioafetiva</span>, fortalecendo laços familiares.
                        </p> */}
                        {/* <p>
                        <span className="highlight-on-scroll" data-aos="highlight">regulamentação de guarda</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">alienação parental</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">fixação e revisão de pensão alimentícia</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">alimentos avoengos</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">adoção</span> &#183; <span className="highlight-on-scroll" data-aos="highlight">reconhecimento de paternidade &amp; maternidade socioafetiva</span>
                        </p> */}
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
                        <img src={image_3} alt="Imagem de uma árvore com a copa frutificando ao lado de cesta de frutas" />
                        <p>
                            <span className="highlight-on-scroll" data-aos="highlight">&nbsp; Legado &nbsp;</span> 
                        </p>
                    </div>
                    <div className="text-container">
                        {/* <p>
                        <span className="highlight-on-scroll" data-aos="highlight">planejamento sucessório</span> &#183;  <span className="highlight-on-scroll" data-aos="highlight">elaboração de testamentos e doações</span> &#183;  <span className="highlight-on-scroll" data-aos="highlight">diretivas de última vontade</span> &#183;  <span className="highlight-on-scroll" data-aos="highlight">fraude patrimonial</span> &#183;  <span className="highlight-on-scroll" data-aos="highlight">curatela</span> &#183;  <span className="highlight-on-scroll" data-aos="highlight">inventário</span>
                        </p> */}
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
