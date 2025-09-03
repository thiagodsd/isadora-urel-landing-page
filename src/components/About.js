import React from 'react';
import about_image from '../assets/images/landing_page_isa_about.jpg';

import '../styles/About.css';

function AboutSection() {
    return (
        <div className="about-container" id="about" data-aos="fade-up">
            <div className="about-section">
                <div className="image-container">
                    <img src={about_image} alt="Fotografia de Isadora Urel lendo processo jurídico em escritório de advocacia" loading="lazy" />
                </div>
                <div className="text-container">
                    <p>
                        Minha aventura acadêmica teve início em uma faculdade de <b>Presidente Prudente</b>, onde me formei em Direito. Durante a graduação, me envolvi em estágios em várias áreas do Direito, uma experiência enriquecedora que me preparou para os desafios da advocacia e da docência, campos nos quais atuo desde a graduação. Concluí duas pós-graduações lato-sensu simultaneamente, tornando-me <b>especialista em Direito de Família e Sucessões, além de Direito Penal e Processo Penal</b>. Minha jornada acadêmica se estendeu até obter os títulos de <b>Mestra e Doutora pela Pontifícia Universidade Católica de São Paulo</b>, com bolsas do CNPq e da CAPES, sempre conciliando a prática advocatícia com a paixão por ensinar.
                    </p>
                    <p>
                        Com o passar dos anos, <b>decidi focar exclusivamente nas áreas de Direito das Famílias, Sucessões e planejamento patrimonial</b>. Essa decisão me levou a me especializar ainda mais, inclusive com <b>formações em mediação e estudos na área de psicologia</b>, para melhor atender ex-casais e os petiz, do consultivo ao contencioso.
                    </p>
                    <p>
                        Minha abordagem profissional é personalizada. Busco entender cada cliente em sua completude, mergulhando nas suas necessidades específicas. Com uma <b>trajetória de mais de uma década no Direito</b>, meu compromisso é entregar soluções jurídicas eficientes e com um olhar humanizado. Estou aqui para ajudar a construir e cuidar das relações que formam a trama de uma vida.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
