import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Services.css'; 

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
                        <img src={image_0} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p><b>Início da Vida Familiar</b> &mdash; O nascimento de uma criança sempre marca o início de uma nova fase na família.</p>
                        <br/>
                        <p>Como sua advogada familiarista, ofereço <span className="highlight-on-scroll" data-aos="highlight">acompanhamento especializado em contratos de técnica de reprodução humana assistida</span>, garantindo que seus direitos e expectativas sejam plenamente respeitados neste momento tão significativo. Também me dedico a elaborar <span className="highlight-on-scroll" data-aos="highlight">planos de parto</span> personalizados, assegurando que suas preferências sejam legalmente reconhecidas. No campo da paternidade, conduzo <span className="highlight-on-scroll" data-aos="highlight">investigações de paternidade</span> com sensibilidade e precisão, buscando esclarecer e estabelecer vínculos familiares importantes. Além disso, ofereço suporte em casos de <span className="highlight-on-scroll" data-aos="highlight">alimentos gravídicos</span>, focando na proteção e no bem-estar da mãe e do bebê durante a gravidez.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_1} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p><b>Diversidade e Crescimento</b> &mdash; Com o passar do tempo surgem novas ramificações.</p>
                        <br/>
                        <p>De forma análoga, famílias se expandem e diversificam. Nessa fase meus serviços abrangem desde a criação de <span className="highlight-on-scroll" data-aos="highlight">contratos de namoro</span>, preservando independências enquanto celebra o relacionamento, até a elaboração de <span className="highlight-on-scroll" data-aos="highlight">pactos antenupciais</span>, assegurando acordos personalizados para futuros cônjuges. Também elaboro <span className="highlight-on-scroll" data-aos="highlight">contratos de união estável</span>, garantindo reconhecimento e proteção legal. Em momentos de mudança, estruturo e conduzo a <span className="highlight-on-scroll" data-aos="highlight">modificação de regime de bens</span> e, em casos de separação, conduzo processos de <span className="highlight-on-scroll" data-aos="highlight">divórcio</span> e <span className="highlight-on-scroll" data-aos="highlight">partilha de bens</span> com sensibilidade e foco na equidade.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_2} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p><b>Estabelecendo Bases Sólidas</b> &mdash; Enraizar é necessário para garantir estabilidade e assegurar o crescimento saudável.</p>
                        <br/>
                        <p>
                        Meu papel na sua solidificação familiar é através assistência na <span className="highlight-on-scroll" data-aos="highlight">regulamentação de guarda</span>, focando em um ambiente estável e harmonioso para a criança. Previno e combato situações de <span className="highlight-on-scroll" data-aos="highlight">alienação parental</span>, protegendo os direitos e o bem-estar dos menores. Trabalho com <span className="highlight-on-scroll" data-aos="highlight">fixação e revisão de pensão alimentícia</span>, buscando justiça e equidade financeira. Em casos de <span className="highlight-on-scroll" data-aos="highlight">alimentos avoengos</span>, garanto o suporte essencial de toda a família. Auxilio famílias no processo de <span className="highlight-on-scroll" data-aos="highlight">adoção</span> e atuo no <span className="highlight-on-scroll" data-aos="highlight">reconhecimento de paternidade &amp; maternidade socioafetiva</span>, fortalecendo laços familiares.
                        </p>
                    </div>
                </div>
                <div className="service">
                    <div className="image-container">
                        <img src={image_3} alt="About Us" />
                    </div>
                    <div className="text-container">
                        <p><b>Legado</b> &mdash; Com a maturidade vem os frutos e o fortalecimento de novos ciclos.</p>
                        <br/>
                        <p>
                        Nessa etapa sou sua aliada no <span className="highlight-on-scroll" data-aos="highlight">planejamento sucessório</span>, guiando a preparação de um futuro seguro para sua família. Me dedico à <span className="highlight-on-scroll" data-aos="highlight">elaboração de testamentos e doações</span>, assegurando que seus desejos sejam claramente expressos e legalmente atendidos, fornecendo orientação em <span className="highlight-on-scroll" data-aos="highlight">diretivas de última vontade</span>, me comprometendo a respeitar e implementar suas decisões finais, além de atuar na prevenção e combate de <span className="highlight-on-scroll" data-aos="highlight">fraude patrimonial</span>. Na área de <span className="highlight-on-scroll" data-aos="highlight">curatela</span>, atuo para proteger os interesses daqueles que não podem fazê-lo por si mesmos. Gerencio processos de <span className="highlight-on-scroll" data-aos="highlight">inventário</span>, simplificando a transferência de bens após o falecimento.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
